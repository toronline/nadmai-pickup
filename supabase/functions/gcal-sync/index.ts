// Supabase Edge Function: sync pickups → Google Calendar
// Trigger: Database Webhook on public.pickups (INSERT, UPDATE) → POST this function.
// Secrets: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, WEBHOOK_SECRET (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are built in)
const SB_URL = Deno.env.get("SUPABASE_URL")!;
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SBH = { apikey: SB_KEY, authorization: "Bearer " + SB_KEY, "content-type": "application/json" };
// Minimal PostgREST helpers (no npm deps)
async function dbGet(path: string) { const r = await fetch(SB_URL + "/rest/v1/" + path, { headers: SBH }); return r.ok ? await r.json() : []; }
async function dbPatch(table: string, filter: string, body: unknown) { await fetch(SB_URL + "/rest/v1/" + table + "?" + filter, { method: "PATCH", headers: SBH, body: JSON.stringify(body) }); }
async function dbUpsert(table: string, onConflict: string, body: unknown) { await fetch(SB_URL + "/rest/v1/" + table + "?on_conflict=" + onConflict, { method: "POST", headers: { ...SBH, prefer: "resolution=merge-duplicates" }, body: JSON.stringify(body) }); }
const STATUS_TH: Record<string, string> = { pending: "รอเตรียม", ready: "พร้อมรับ", completed: "รับแล้ว", cancelled: "ยกเลิก" };

async function accessToken(refresh: string) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: Deno.env.get("GOOGLE_CLIENT_ID")!,
      client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET")!,
      refresh_token: refresh,
      grant_type: "refresh_token",
    }),
  });
  if (!r.ok) throw new Error("token: " + (await r.text()));
  return (await r.json()).access_token as string;
}

Deno.serve(async (req) => {
  if (req.headers.get("x-webhook-secret") !== Deno.env.get("WEBHOOK_SECRET")) return new Response("forbidden", { status: 403 });
  const { type, record: p, old_record: old } = await req.json();
  if (!p) return new Response("no record");
  // ignore our own write-back
  if (type === "UPDATE" && old && old.status === p.status && old.starts_at === p.starts_at && old.item === p.item) return new Response("skip");

  const [shop] = await dbGet(`shops?id=eq.${p.shop_id}&select=*`);
  const [conn] = await dbGet(`google_connections?or=(shop_id.eq.${p.shop_id},shop_id.is.null)&order=shop_id.nullslast&limit=1&select=*`);
  if (!shop || !conn) return new Response("no shop/connection", { status: 200 });

  const calId = encodeURIComponent(shop.google_calendar_id || "primary");
  const base = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events`;
  try {
    const token = await accessToken(conn.refresh_token);
    const H = { authorization: "Bearer " + token, "content-type": "application/json" };
    let eventId = p.gcal_event_id as string | null;

    if (p.status === "cancelled" && eventId) {
      await fetch(`${base}/${eventId}?sendUpdates=all`, { method: "DELETE", headers: H });
      eventId = null;
    } else if (p.status !== "cancelled") {
      const body = {
        summary: `รับสินค้า: ${p.item} · ${p.customer_name}`,
        location: shop.address ?? shop.name,
        description: [
          `ร้าน: ${shop.name}`,
          p.order_no ? `คำสั่งซื้อ: #${p.order_no}` : null,
          `รหัสรับสินค้า: ${p.pickup_code}`,
          `สถานะ: ${STATUS_TH[p.status]}`,
          `โทร: ${p.customer_phone}`,
          p.note ? `หมายเหตุ: ${p.note}` : null,
        ].filter(Boolean).join("\n"),
        start: { dateTime: p.starts_at, timeZone: shop.timezone },
        end: { dateTime: p.ends_at, timeZone: shop.timezone },
        attendees: p.add_to_customer_calendar && p.customer_email ? [{ email: p.customer_email, displayName: p.customer_name }] : [],
        reminders: { useDefault: false, overrides: [{ method: "popup", minutes: p.remind_minutes }] },
        colorId: p.status === "ready" ? "7" : p.status === "completed" ? "8" : undefined,
      };
      const r = await fetch(eventId ? `${base}/${eventId}?sendUpdates=all` : `${base}?sendUpdates=all`, {
        method: eventId ? "PATCH" : "POST", headers: H, body: JSON.stringify(body),
      });
      if (!r.ok) throw new Error("calendar: " + (await r.text()));
      eventId = (await r.json()).id;
    }
    await dbPatch("pickups", `id=eq.${p.id}`, { gcal_event_id: eventId, gcal_synced_at: new Date().toISOString(), gcal_error: null });
    return new Response("ok");
  } catch (e) {
    await dbPatch("pickups", `id=eq.${p.id}`, { gcal_error: String(e) });
    return new Response(String(e), { status: 500 });
  }
});
