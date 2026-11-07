# Deploy: GitHub Pages + Supabase

## 1. ขึ้น GitHub
```bash
git init && git add . && git commit -m "นัดรับสินค้า: design system + demo + supabase schema"
git branch -M main
git remote add origin https://github.com/<you>/nadmai-pickup.git
git push -u origin main
```
GitHub → Settings → Pages → Source: **Deploy from branch**, `main` / root.
เว็บจะอยู่ที่ `https://<you>.github.io/nadmai-pickup/` (หน้าแรก = `index.html`).
> `_ds_bundle.js` ต้อง commit ไปด้วย — หน้า UI kit โหลดไฟล์นี้

## 2. Supabase
1. สร้างโปรเจกต์ที่ supabase.com (region: Singapore)
2. SQL Editor → รัน `supabase/migrations/20261108000000_pickup_schema.sql` แล้ว `supabase/seed.sql`
   หรือใช้ CLI: `supabase link --project-ref <ref> && supabase db push`
3. Authentication → เปิด Email (หรือ Google) สำหรับพนักงานร้าน แล้วเพิ่มแถวใน `shop_members` (shop_id, user_id, role='owner')

### ตาราง
- **shops** — ร้าน, เวลาเปิด-ปิด, ช่วงรับ (slot_minutes), จำนวนคิวต่อช่วง (slot_capacity), google_calendar_id
- **pickups** — นัดรับ: item, order_no, starts_at/ends_at, status (pending → ready → completed / cancelled), pickup_code, ข้อมูลลูกค้า, gcal_event_id
- **shop_members** — พนักงาน ↔ ร้าน (ใช้กับ RLS)
- **google_connections** — refresh token ของ Google (อ่านได้เฉพาะ service role)

### RPC สำหรับหน้าลูกค้า (anon)
```js
await sb.rpc('get_available_slots', { p_shop_slug:'bake-me-siam', p_date:'2026-11-14' })
await sb.rpc('book_pickup', { p_shop_slug:'bake-me-siam', p_item:'เค้กวันเกิด 2 ปอนด์', p_order_no:'A-1042',
  p_date:'2026-11-14', p_time:'14:30', p_name:'มาลี กิตติ', p_phone:'081-234-5678', p_email:'malee.k@gmail.com' })
// → { pickup_id, pickup_code, starts_at, ends_at }
```
Errors: `SHOP_NOT_FOUND`, `ITEM_REQUIRED`, `CONTACT_REQUIRED`, `SLOT_IN_PAST`, `SLOT_FULL`.
แดชบอร์ดอ่าน/อัปเดต `pickups` ตรงๆ ผ่าน RLS และ subscribe Realtime เพื่อให้นัดใหม่เด้งขึ้นทันที

## 3. Google Calendar อัตโนมัติ
1. Google Cloud Console → เปิด **Google Calendar API** → OAuth client (Web) → Redirect URI = `https://<ref>.supabase.co/functions/v1/google-oauth`
2. ตั้ง secrets แล้ว deploy:
```bash
supabase secrets set GOOGLE_CLIENT_ID=… GOOGLE_CLIENT_SECRET=… WEBHOOK_SECRET=<random> \
  OAUTH_REDIRECT_URL=https://<ref>.supabase.co/functions/v1/google-oauth APP_URL=https://<you>.github.io/nadmai-pickup/ui_kits/admin/
supabase functions deploy gcal-sync --no-verify-jwt
supabase functions deploy google-oauth --no-verify-jwt
```
3. เชื่อมบัญชี: เปิด `https://<ref>.supabase.co/functions/v1/google-oauth?shop_id=<uuid>` (ไม่ใส่ shop_id = บัญชีกลางของทุกร้าน)
4. Database → Webhooks → New: table `pickups`, events **Insert + Update**, type HTTP POST → `…/functions/v1/gcal-sync`, header `x-webhook-secret: <WEBHOOK_SECRET>`

ผลลัพธ์: นัดรับใหม่ → สร้าง event ในปฏิทินร้าน + ส่งคำเชิญถึงอีเมลลูกค้า · เปลี่ยนสถานะ → อัปเดต event · ยกเลิก → ลบ event

## สถานะปัจจุบัน
หน้า Demo / UI kit ยังใช้ข้อมูลจำลองใน `data.js` — ขั้นต่อไปคือเปลี่ยนให้เรียก RPC ด้านบน (ใส่ค่าใน `supabase-config.js`)
