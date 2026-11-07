// One-time Google connect: GET /google-oauth?shop_id=<uuid>  → redirects to Google consent
// Google redirects back to the same URL with ?code=… → stores refresh token.
// Secrets: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, OAUTH_REDIRECT_URL (= this function's public URL), APP_URL
const SB_URL = Deno.env.get("SUPABASE_URL")!;
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SBH = { apikey: SB_KEY, authorization: "Bearer " + SB_KEY, "content-type": "application/json" };
// Minimal PostgREST helpers (no npm deps)
async function dbGet(path: string) { const r = await fetch(SB_URL + "/rest/v1/" + path, { headers: SBH }); return r.ok ? await r.json() : []; }
async function dbPatch(table: string, filter: string, body: unknown) { await fetch(SB_URL + "/rest/v1/" + table + "?" + filter, { method: "PATCH", headers: SBH, body: JSON.stringify(body) }); }
async function dbUpsert(table: string, onConflict: string, body: unknown) { await fetch(SB_URL + "/rest/v1/" + table + "?on_conflict=" + onConflict, { method: "POST", headers: { ...SBH, prefer: "resolution=merge-duplicates" }, body: JSON.stringify(body) }); }

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const redirect = Deno.env.get("OAUTH_REDIRECT_URL")!;
  const code = url.searchParams.get("code");
  if (!code) {
    const q = new URLSearchParams({
      client_id: Deno.env.get("GOOGLE_CLIENT_ID")!, redirect_uri: redirect, response_type: "code",
      access_type: "offline", prompt: "consent", include_granted_scopes: "true",
      scope: "https://www.googleapis.com/auth/calendar.events openid email",
      state: url.searchParams.get("shop_id") ?? "",
    });
    return Response.redirect("https://accounts.google.com/o/oauth2/v2/auth?" + q, 302);
  }
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ code, client_id: Deno.env.get("GOOGLE_CLIENT_ID")!, client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET")!, redirect_uri: redirect, grant_type: "authorization_code" }),
  });
  const t = await r.json();
  if (!t.refresh_token) return new Response("No refresh token returned", { status: 400 });
  const email = JSON.parse(atob(t.id_token.split(".")[1])).email;
  const shopId = url.searchParams.get("state") || null;
  await dbUpsert("google_connections", "shop_id", { shop_id: shopId, google_email: email, refresh_token: t.refresh_token });
  return Response.redirect((Deno.env.get("APP_URL") ?? "/") + "?google=connected", 302);
});
