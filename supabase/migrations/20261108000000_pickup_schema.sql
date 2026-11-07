-- นัดรับสินค้า (Nadmai Pickup) — Supabase schema
-- Run in Supabase SQL Editor or: supabase db push

create extension if not exists pgcrypto;

-- ---------- enums ----------
do $$ begin
  create type pickup_status as enum ('pending','ready','completed','cancelled');
exception when duplicate_object then null; end $$;

-- ---------- shops ----------
create table if not exists public.shops (
  id               uuid primary key default gen_random_uuid(),
  slug             text unique not null,
  name             text not null,
  description      text,
  address          text,
  color            text not null default '#137C76',
  timezone         text not null default 'Asia/Bangkok',
  open_time        time not null default '10:00',
  close_time       time not null default '20:00',
  closed_weekdays  int[] not null default '{}',      -- 0=Sun … 6=Sat
  slot_minutes     int  not null default 30 check (slot_minutes between 5 and 240),
  slot_capacity    int  not null default 2 check (slot_capacity > 0),
  hold_hours       int  not null default 24,          -- เก็บสินค้าไว้ให้หลังเวลานัด
  google_calendar_id text,                             -- target calendar for this shop
  is_active        boolean not null default true,
  created_at       timestamptz not null default now()
);

-- ---------- staff membership ----------
create table if not exists public.shop_members (
  shop_id  uuid references public.shops(id) on delete cascade,
  user_id  uuid references auth.users(id) on delete cascade,
  role     text not null default 'staff' check (role in ('owner','staff')),
  primary key (shop_id, user_id)
);

-- ---------- pickups ----------
create table if not exists public.pickups (
  id               uuid primary key default gen_random_uuid(),
  shop_id          uuid not null references public.shops(id) on delete cascade,
  item             text not null check (length(trim(item)) > 0),
  order_no         text,
  starts_at        timestamptz not null,
  ends_at          timestamptz not null,
  status           pickup_status not null default 'pending',
  pickup_code      char(4) not null,
  customer_name    text not null,
  customer_phone   text not null,
  customer_email   text,
  note             text,
  add_to_customer_calendar boolean not null default true,
  remind_minutes   int not null default 30,
  gcal_event_id    text,
  gcal_synced_at   timestamptz,
  gcal_error       text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  check (ends_at > starts_at)
);
create index if not exists pickups_shop_time_idx on public.pickups (shop_id, starts_at);
create index if not exists pickups_status_idx   on public.pickups (status);

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;
drop trigger if exists pickups_touch on public.pickups;
create trigger pickups_touch before update on public.pickups for each row execute function public.touch_updated_at();

-- ---------- Google OAuth tokens (service-role only) ----------
create table if not exists public.google_connections (
  id             uuid primary key default gen_random_uuid(),
  shop_id        uuid unique references public.shops(id) on delete cascade, -- null = platform-wide account
  google_email   text not null,
  refresh_token  text not null,
  created_at     timestamptz not null default now()
);

-- ---------- helpers ----------
create or replace function public.is_shop_member(p_shop uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from shop_members where shop_id = p_shop and user_id = auth.uid());
$$;

-- Available slots for the public booking page
create or replace function public.get_available_slots(p_shop_slug text, p_date date)
returns table (slot_time time, remaining int)
language plpgsql stable security definer set search_path = public as $$
declare s shops;
begin
  select * into s from shops where slug = p_shop_slug and is_active;
  if not found then return; end if;
  if extract(dow from p_date)::int = any(s.closed_weekdays) then return; end if;
  return query
  with grid as (
    select g::time as t
    from generate_series(p_date + s.open_time, p_date + s.close_time - make_interval(mins => s.slot_minutes), make_interval(mins => s.slot_minutes)) g
  )
  select grid.t,
         (s.slot_capacity - count(p.id))::int
  from grid
  left join pickups p
    on p.shop_id = s.id and p.status <> 'cancelled'
   and p.starts_at = ((p_date + grid.t) at time zone s.timezone)
  where ((p_date + grid.t) at time zone s.timezone) > now()
  group by grid.t
  having s.slot_capacity - count(p.id) > 0
  order by grid.t;
end $$;

-- Public booking RPC (anon-callable). Returns id + pickup code.
create or replace function public.book_pickup(
  p_shop_slug text, p_item text, p_order_no text, p_date date, p_time time,
  p_name text, p_phone text, p_email text default null, p_note text default null,
  p_add_to_calendar boolean default true, p_remind_minutes int default 30)
returns table (pickup_id uuid, pickup_code char(4), starts_at timestamptz, ends_at timestamptz)
language plpgsql security definer set search_path = public as $$
declare s shops; v_start timestamptz; v_used int; v_code char(4); v_id uuid;
begin
  select * into s from shops where slug = p_shop_slug and is_active;
  if not found then raise exception 'SHOP_NOT_FOUND'; end if;
  if coalesce(trim(p_item),'') = '' then raise exception 'ITEM_REQUIRED'; end if;
  if coalesce(trim(p_name),'') = '' or coalesce(trim(p_phone),'') = '' then raise exception 'CONTACT_REQUIRED'; end if;
  v_start := (p_date + p_time) at time zone s.timezone;
  if v_start <= now() then raise exception 'SLOT_IN_PAST'; end if;
  perform pg_advisory_xact_lock(hashtext(s.id::text || v_start::text));
  select count(*) into v_used from pickups where shop_id = s.id and pickups.starts_at = v_start and status <> 'cancelled';
  if v_used >= s.slot_capacity then raise exception 'SLOT_FULL'; end if;
  v_code := lpad((floor(random()*10000))::int::text, 4, '0');
  insert into pickups (shop_id,item,order_no,starts_at,ends_at,pickup_code,customer_name,customer_phone,customer_email,note,add_to_customer_calendar,remind_minutes)
  values (s.id,trim(p_item),nullif(trim(p_order_no),''),v_start,v_start + make_interval(mins => s.slot_minutes),v_code,trim(p_name),trim(p_phone),nullif(trim(p_email),''),p_note,p_add_to_calendar,p_remind_minutes)
  returning id into v_id;
  return query select v_id, v_code, v_start, v_start + make_interval(mins => s.slot_minutes);
end $$;

-- ---------- Row Level Security ----------
alter table public.shops              enable row level security;
alter table public.shop_members       enable row level security;
alter table public.pickups            enable row level security;
alter table public.google_connections enable row level security;

drop policy if exists "shops public read" on public.shops;
create policy "shops public read" on public.shops for select using (is_active);
drop policy if exists "shops owner update" on public.shops;
create policy "shops owner update" on public.shops for update using (exists (select 1 from shop_members m where m.shop_id = id and m.user_id = auth.uid() and m.role = 'owner'));

drop policy if exists "members read own" on public.shop_members;
create policy "members read own" on public.shop_members for select using (user_id = auth.uid());

drop policy if exists "staff read pickups" on public.pickups;
create policy "staff read pickups" on public.pickups for select using (public.is_shop_member(shop_id));
drop policy if exists "staff update pickups" on public.pickups;
create policy "staff update pickups" on public.pickups for update using (public.is_shop_member(shop_id)) with check (public.is_shop_member(shop_id));
drop policy if exists "staff insert pickups" on public.pickups;
create policy "staff insert pickups" on public.pickups for insert with check (public.is_shop_member(shop_id));
-- google_connections: no policies → only service_role (Edge Functions) can access.

grant execute on function public.get_available_slots(text, date) to anon, authenticated;
grant execute on function public.book_pickup(text,text,text,date,time,text,text,text,text,boolean,int) to anon, authenticated;

-- Realtime for the dashboard (new pickups pop in live)
alter publication supabase_realtime add table public.pickups;
