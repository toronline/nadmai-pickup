window.BK_DATA={
platform:{name:'นัดรับสินค้า',tz:'เวลาประเทศไทย (GMT+7)'},
shops:[
{id:'bake',title:'Bake Me · สยาม',description:'ชั้น 2 สยามสแควร์วัน · จุดรับหน้าร้าน',duration:'เปิด 10:00–20:00',color:'var(--event-marigold)',address:'สยามสแควร์วัน ชั้น 2'},
{id:'green',title:'Green Grocer · อารีย์',description:'ผักผลไม้ออร์แกนิก · รับที่เคาน์เตอร์',duration:'เปิด 08:00–18:00',color:'var(--event-olive)',address:'ซอยอารีย์ 4'},
{id:'gadget',title:'Gadget Hub · ลาดพร้าว',description:'เซ็นทรัลลาดพร้าว ชั้น 3 · ต้องแสดงบัตรประชาชน',duration:'เปิด 10:00–21:00',color:'var(--event-indigo)',address:'เซ็นทรัลลาดพร้าว ชั้น 3'},
{id:'flower',title:'ร้านดอกไม้ป้าแดง · ปากคลอง',description:'ช่อดอกไม้สั่งทำ · รับหน้าร้าน',duration:'เปิด 06:00–17:00',color:'var(--event-rose)',address:'ปากคลองตลาด ล็อก 12'}],
slots:{'เช้า':['10:00','10:30','11:00','11:30'],'บ่าย':['13:00','13:30','14:00','14:30','15:00','15:30'],'เย็น':['17:00','17:30','18:00']},
full:['10:30','15:00'],
windowMins:30,
today:'2026-11-07'
};
window.BK_FMT=function(iso){const d=new Date(iso+'T00:00:00');const dow=['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'][d.getDay()];const m=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'][d.getMonth()];return dow+' '+d.getDate()+' '+m+' '+(d.getFullYear()+543);};
window.BK_END=function(t,mins){const [h,m]=t.split(':').map(Number);const x=h*60+m+mins;return String(Math.floor(x/60)).padStart(2,'0')+':'+String(x%60).padStart(2,'0');};