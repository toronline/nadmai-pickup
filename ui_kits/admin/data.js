window.AD_DATA={
week:[{iso:'2026-11-09',d:'จ.',n:9},{iso:'2026-11-10',d:'อ.',n:10},{iso:'2026-11-11',d:'พ.',n:11},{iso:'2026-11-12',d:'พฤ.',n:12},{iso:'2026-11-13',d:'ศ.',n:13},{iso:'2026-11-14',d:'ส.',n:14},{iso:'2026-11-15',d:'อา.',n:15}],
hours:[10,11,12,13,14,15,16,17,18,19],
shops:{bake:{name:'Bake Me · สยาม',short:'Bake Me',color:'var(--event-marigold)'},green:{name:'Green Grocer · อารีย์',short:'Green Grocer',color:'var(--event-olive)'},gadget:{name:'Gadget Hub · ลาดพร้าว',short:'Gadget Hub',color:'var(--event-indigo)'},flower:{name:'ร้านดอกไม้ป้าแดง · ปากคลอง',short:'ป้าแดง',color:'var(--event-rose)'}},
statusLabel:{pending:'รอเตรียม',ready:'พร้อมรับ',completed:'รับแล้ว',cancelled:'ยกเลิก'},
appts:[
{id:1,day:0,start:'10:00',mins:30,item:'ผักสลัดออร์แกนิก 3 ถุง',order:'G-2210',shop:'green',customer:'นที ส.',status:'completed',synced:true,phone:'089-111-2222',email:'natee@gmail.com',code:'3391'},
{id:2,day:1,start:'13:00',mins:30,item:'iPad Air 11"',order:'GH-5520',shop:'gadget',customer:'มาลี กิตติ',status:'ready',synced:true,phone:'081-234-5678',email:'malee.k@gmail.com',code:'7710'},
{id:3,day:2,start:'11:30',mins:30,item:'ช่อกุหลาบขาว 24 ดอก',order:'',shop:'flower',customer:'กานต์ ว.',status:'pending',synced:false,phone:'086-555-1234',email:'',code:'1184'},
{id:4,day:3,start:'10:30',mins:30,item:'ครัวซองต์ 12 ชิ้น',order:'A-1031',shop:'bake',customer:'Ploy R.',status:'ready',synced:true,phone:'092-777-8888',email:'ploy.r@gmail.com',code:'5402'},
{id:5,day:3,start:'15:00',mins:30,item:'หูฟัง AirPods Pro',order:'GH-5531',shop:'gadget',customer:'ธีร์ อ.',status:'pending',synced:true,phone:'083-222-3333',email:'thee@gmail.com',code:'6627'},
{id:6,day:4,start:'14:00',mins:30,item:'ผลไม้กระเช้า',order:'G-2234',shop:'green',customer:'วรรณ จ.',status:'cancelled',synced:true,phone:'084-999-0000',email:'wan@gmail.com',code:'2045'},
{id:7,day:5,start:'11:00',mins:30,item:'เค้กชิฟฟอนส้ม 1 ปอนด์',order:'A-1040',shop:'bake',customer:'อร ป.',status:'ready',synced:true,phone:'087-654-3210',email:'orn@gmail.com',code:'8812'},
{id:8,day:5,start:'16:00',mins:30,item:'พวงมาลัยดาวเรือง 5 พวง',order:'',shop:'flower',customer:'Jane T.',status:'pending',synced:true,phone:'095-123-4567',email:'jane.t@gmail.com',code:'4930'},
{id:9,day:6,start:'13:30',mins:30,item:'Nintendo Switch 2',order:'GH-5544',shop:'gadget',customer:'ภูมิ ช.',status:'pending',synced:true,phone:'088-321-6540',email:'phum@gmail.com',code:'7058'}]
};
window.AD_END=function(t,mins){const [h,m]=t.split(':').map(Number);const x=h*60+m+mins;return String(Math.floor(x/60)).padStart(2,'0')+':'+String(x%60).padStart(2,'0');};