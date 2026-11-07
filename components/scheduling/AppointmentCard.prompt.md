List item for one appointment / pickup: date-time stub on the left, item + status + Google Calendar sync line on the right.
```jsx
<AppointmentCard service="เค้กวันเกิด 2 ปอนด์" dateLabel="ส. 14 พ.ย." time="14:30" customer="มาลี ก." staff="Bake Me · สยาม" staffIcon="store" status="ready" synced />
```
- Status: pending (รอเตรียม via statusLabel) · ready (พร้อมรับ) · completed (รับแล้ว) · cancelled. `compact` hides the meta row.