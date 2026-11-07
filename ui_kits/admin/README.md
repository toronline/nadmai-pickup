# Pickup dashboard UI kit (shop / pickup-point side)
Desktop tool for staff managing **product-pickup appointments across several shops**. 248px sidebar + content.

Screens: **ปฏิทินรับสินค้า** (week grid, 30-min pickup blocks coloured by shop, shop filter tags; dashed = รอเตรียม, grey = รับแล้ว, struck = ยกเลิก, marigold now-line), **นัดรับ** (tabbed list: รอเตรียม / พร้อมรับ / รับแล้ว / ยกเลิก with one-tap status buttons), **ตั้งค่า** (Google Calendar connection, per-shop calendars, pickup hours & rules). Click a block → dialog with pickup code and status actions. "สร้างนัดรับ" → toast confirms calendar write.
Status flow: pending (รอเตรียม) → ready (พร้อมรับ) → completed (รับแล้ว); or cancelled.
Shops & Customers routes are intentionally blank. Listens for `nm-booked` messages (Demo.html).