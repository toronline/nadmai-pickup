# Nadmai Design System (นัดหมาย)

**Product:** a Thai **product-pickup appointment** system: customers book a time to collect goods at one of several shops (bakery, grocer, gadget store, florist…), and every confirmed pickup is added automatically to Google Calendar — for the shop and (optionally) the customer.
Brief from the user (verbatim): "ต้องการระบบที่ทำนัดหมาย และเพิ่มใน google calendar โดยอัตโนมัติ", later refined to "นัดรับสินค้าตามร้านค้าต่างๆ".

**Sources:** none. No codebase, Figma, logo, fonts or screenshots were supplied — this system is authored from scratch. "Nadmai" is a **working name** (romanised นัดหมาย = "appointment"); replace it when the real brand is known. Shop names in kits (Bake Me, Green Grocer, Gadget Hub, ร้านดอกไม้ป้าแดง) are sample content.

## Products
1. **Pickup booking page** (`ui_kits/booking`) — public, mobile-first link customers open from LINE/Instagram/QR. Choose shop + type item (+ order no.) → date & 30-min pickup window → details → review → confirmed with a 4-digit pickup code (+ "added to Google Calendar").
2. **Pickup dashboard** (`ui_kits/admin`) — desktop tool for staff across several shops: week calendar coloured by shop, pickup list by status, Google Calendar connection & pickup rules.

## Content fundamentals
- **Language:** Thai first; English only for proper nouns (Google Calendar, Google Meet) and codes. Write UI labels in plain, polite-neutral Thai — **no ครับ/ค่ะ in labels or buttons**; they're acceptable only in free-text messages from the business.
- **Voice:** calm, reassuring, concrete. Tell people what *will happen* to their calendar: "จะเพิ่มลงใน Google Calendar ของ malee.k@gmail.com", "นัดนี้จะถูกลบออกจาก Google Calendar ด้วย".
- **Address:** second person "คุณ" sparingly; most copy is subject-less Thai ("เลือกวันและเวลา", "ยืนยันการนัดหมาย"). Business-side copy talks about "ลูกค้า".
- **Buttons:** verb-first, short: ยืนยันนัดรับ · ถัดไป · ย้อนกลับ · เลื่อนเวลารับ · ยกเลิกนัดรับ · สินค้าพร้อมรับ · ลูกค้ารับแล้ว · เชื่อมต่อ · สร้างนัดรับ.
- **Pickup status words (fixed):** รอเตรียม (pending) · พร้อมรับ (ready) · รับแล้ว (completed) · ยกเลิก (cancelled) · อยู่ใน Google Calendar / รอซิงก์ (synced / not yet). Generic appointments may use ยืนยันแล้ว / รอยืนยัน.
- **Pickup codes:** 4-digit mono, wide tracking ("8812"); order numbers prefixed # ("#A-1042").
- **Dates & times:** Buddhist-era year, Thai abbreviations, 24-hour clock: "ศ. 14 พ.ย. 2569", "14:30–15:15 น.". Durations "45 นาที", "2 ชั่วโมง". Prices "฿450". Booking refs mono uppercase "NM-24A7Q".
- **Empty/negative states:** state the fact + next step: "เลือกวันเพื่อดูเวลาว่าง", "ซิงก์ไม่สำเร็จ — กรุณาเชื่อมต่อบัญชีอีกครั้ง".
- **Emoji:** never. Exclamation marks: never. Casing for English: sentence case.

## Visual foundations
- **Vibe:** a quiet, paper-like scheduling tool — warm stone neutrals, one deep teal for action, marigold only for "today/now". Trustworthy over playful.
- **Color:** `--teal-600` primary (buttons, selected date/slot, focus). `--marigold-500` = today dot, now-line, "ใหม่" badge — never for buttons. Warm stone greys (not blue-grey). Semantic green/amber/red/blue each with a soft tint + ink. Six muted event hues (`--event-*`) — one per shop on the calendar. No gradients anywhere.
- **Type:** Anuphan (Thai + Latin, one family for everything) at 400/500/600; IBM Plex Mono 500 for times, durations, prices-in-meta, booking codes. Thai needs leading ≥1.35 — body 1.6, headings 1.25–1.4. Headings semibold, slight -0.01em tracking on display only.
- **Spacing:** 4px base (`--space-1…16`). Booking column 560px; admin sidebar 248px; page gutters 20px mobile / 28px desktop. Controls 32/40/48px; touch slots 44px.
- **Corner radii:** 4 (checkbox), 6 (tags, tooltips, calendar events), 10 (buttons, inputs, slots, date cells), 14 (cards), 20 (dialogs), full (badges, switches, avatars).
- **Cards:** white, 1px `--border-default` stone border, `--shadow-xs`, 14px radius. Selected = teal border + 1px teal outer ring and teal-50 fill. Interactive hover = stronger border + `--shadow-sm`. No coloured left-border cards; category colour appears as a small pill/square instead (calendar events use an inset 3px left shadow inside a tinted block — that's an event, not a card).
- **Shadows:** soft, warm (stone-900 based), low-opacity; four steps xs→lg. lg only for dialogs/toasts.
- **Borders:** 1px everywhere; 1.5px on checkbox/radio rings; dashed 1px outline marks a *pending* calendar event.
- **Backgrounds:** flat `--bg-app` (stone-50) behind white surfaces. No imagery, textures or illustrations — except a subtle 135° hatch on closed days in the week grid.
- **Transparency & blur:** only the booking page sticky footer (white 92% + 12px backdrop blur) and the dialog scrim (stone-900 @ 42%).
- **Motion:** fade-up 6px, 180–280ms, `--ease-out`. Switch thumb slides 180ms. No bounces, springs or parallax. Spinner for async confirm.
- **Hover:** buttons go one step darker (teal 600→700); ghost/rows get stone-100/50 fill; slots/date cells get teal-50 fill + teal-300 border. Links underline on hover.
- **Press:** buttons scale to 0.98 and darken another step (teal-800).
- **Focus:** teal border + 3px teal ring at 28% (`--focus-ring`).
- **Disabled/unavailable:** stone-100 fill, stone-400 text; unavailable dates/slots also get a strike-through.
- **Imagery:** none supplied. If photos are added (staff/salon), use warm, natural-light shots; avatars fall back to initials on teal-100.
- **Layout rules:** booking page = header (business + stepper) → content → fixed bottom action bar. Admin = sticky sidebar, top bar with title + actions, content scrolls.

## Iconography
- **Lucide** (outline, 2px stroke, round caps) via CDN — `lucide-static@0.460.0`. The `Icon` component renders each SVG as a CSS mask so it inherits `currentColor`. No icon font, no PNGs.
- Sizes: 13–16 inline meta, 18–20 controls, 22–24 nav/feature tiles.
- Core set: calendar, calendar-check, calendar-plus, calendar-clock, calendar-days, clock, map-pin, store, package, package-check, receipt, navigation, user/users, bell, phone, mail, link, settings, plus, check, x, chevron-left/right/down, arrow-left/right, search, refresh-cw.
- **No emoji, no unicode glyphs as icons.** Do not use Google's logo — "Google Calendar" is written as text next to the calendar-check glyph.
- Substitution flag: Lucide was chosen (no source icon set existed).

## Logo
No logo was provided. The wordmark is the product name in Anuphan 600 (see Brand → Wordmark card). Do not draw a mark.

## Fonts
Google Fonts substitutes loaded in `tokens/fonts.css`: **Anuphan** and **IBM Plex Mono**. Supply licensed brand font files to replace them.

## Index
- `styles.css` — entry; imports `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (namespace `window.NadmaiDesignSystem_0c4e36`)
- `ui_kits/booking/`, `ui_kits/admin/` — click-through screens
- `Demo.html` — end-to-end demo: booking page (phone) + admin dashboard side-by-side; confirming a booking drops it into the shop calendar live
- `index.html` — launcher page linking everything
- `supabase/` — Postgres schema + RLS + RPCs (`book_pickup`, `get_available_slots`), seed shops, Edge Functions (`gcal-sync`, `google-oauth`)
- `DEPLOY.md` — GitHub Pages + Supabase + Google Calendar setup
- `thumbnail.html`, `SKILL.md`

## Components
- **core/** — Icon, Button, IconButton
- **forms/** — Input, Textarea, Select, Checkbox, Radio, Switch
- **display/** — Card, Badge, Tag, Avatar, Tabs
- **feedback/** — Dialog, Toast, Tooltip
- **scheduling/** — MiniCalendar, TimeSlot, ServiceOption, AppointmentCard, CalendarSync, Stepper

### Intentional additions
No source inventory existed, so the standard set was authored plus domain components: MiniCalendar (Thai/BE date picker), TimeSlot, ServiceOption (shop/service row), AppointmentCard (supports `ready` status + `statusLabel`), CalendarSync (Google connection status), Stepper (booking progress), Textarea (booking notes), Icon (Lucide wrapper).
