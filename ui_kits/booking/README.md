# Pickup booking UI kit (customer-facing)
Public link where customers book a time to **pick up goods at a shop** (bakery, grocer, gadget store, florist…). Mobile-first, 560px column.

Flow: **ShopStep** (choose shop + type item + optional order no.) → **DateTimeStep** (30-min pickup windows) → **DetailsStep** → **ReviewStep** → **ConfirmedStep** (4-digit pickup code + "added to Google Calendar").
Files: `index.html` (state), `BookingShell.jsx`, step files, `data.js` (sample shops, slots, Thai date formatter). Posts `nm-booked` to the parent window on confirm (used by Demo.html).
Composes: Stepper, ServiceOption (as shop row), Input, MiniCalendar, TimeSlot, Textarea, Select, Switch, Checkbox, Card, Button, Toast, Icon.
Original design — no product source was provided.