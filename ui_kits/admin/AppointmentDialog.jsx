function AppointmentDialog({appt,onClose,onUpdate}){
  const {Dialog,Button,Badge,Icon,Avatar}=window.NadmaiDesignSystem_0c4e36;const D=window.AD_DATA;
  if(!appt)return null;const day=D.week[appt.day];const shop=D.shops[appt.shop];
  const tone={pending:'warning',ready:'info',completed:'neutral',cancelled:'danger'}[appt.status];
  const R=({i,children})=><div style={{display:'flex',gap:12,alignItems:'center',font:'var(--type-body-sm)',color:'var(--text-body)'}}><Icon name={i} size={17} color="var(--text-subtle)"/>{children}</div>;
  const set=s=>{onUpdate({...appt,status:s,synced:true});onClose();};
  const closed=appt.status==='cancelled'||appt.status==='completed';
  return <Dialog title={appt.item} onClose={onClose} width={480}
    footer={closed?<Button variant="secondary" onClick={onClose}>ปิด</Button>:<>
      <Button variant="ghost" onClick={()=>set('cancelled')} style={{marginRight:'auto',color:'var(--status-danger)'}}>ยกเลิกนัดรับ</Button>
      <Button variant="secondary" iconLeft="calendar-clock">เลื่อนเวลา</Button>
      {appt.status==='pending'?<Button iconLeft="package-check" onClick={()=>set('ready')}>สินค้าพร้อมรับ</Button>:<Button iconLeft="check" onClick={()=>set('completed')}>ลูกค้ารับแล้ว</Button>}</>}>
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      <div style={{display:'flex',gap:8}}><Badge tone={tone} dot>{D.statusLabel[appt.status]}</Badge>{appt.synced?<Badge tone="brand">อยู่ใน Google Calendar</Badge>:<Badge tone="warning">รอซิงก์</Badge>}</div>
      <R i="store"><span style={{width:8,height:8,borderRadius:2,background:shop.color}}/>{shop.name}</R>
      {appt.order&&<R i="receipt">คำสั่งซื้อ <span style={{font:'500 13px var(--font-mono)'}}>#{appt.order}</span></R>}
      <R i="calendar">{day.d} {day.n} พฤศจิกายน 2569</R>
      <R i="clock">รับช่วง <span style={{font:'var(--type-time)',fontSize:14}}>{appt.start}–{window.AD_END(appt.start,appt.mins)}</span></R>
      <div style={{height:1,background:'var(--border-subtle)',margin:'4px 0'}}/>
      <div style={{display:'flex',gap:12,alignItems:'center'}}><Avatar name={appt.customer} size={40}/><div style={{flex:1}}><div style={{font:'var(--type-label)',color:'var(--text-strong)'}}>{appt.customer}</div><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{appt.phone}{appt.email?' · '+appt.email:''}</div></div>
        <div style={{textAlign:'right'}}><div style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>รหัสรับ</div><div style={{font:'600 20px/1.1 var(--font-mono)',letterSpacing:'0.1em',color:'var(--text-strong)'}}>{appt.code}</div></div></div>
    </div></Dialog>;
}
window.AppointmentDialog=AppointmentDialog;