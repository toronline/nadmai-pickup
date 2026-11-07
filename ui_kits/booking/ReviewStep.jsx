function SummaryRows({p,date,time,form}){
  const {Icon}=window.NadmaiDesignSystem_0c4e36;
  const rows=[['package',p.item,p.order?'คำสั่งซื้อ #'+p.order:null],['store',p.shop.title,p.shop.address],['calendar',window.BK_FMT(date),null],['clock','รับช่วง '+time+'–'+window.BK_END(time,window.BK_DATA.windowMins)+' น.',null]];
  if(form)rows.push(['user',form.name||'—',form.phone]);
  return <div style={{display:'flex',flexDirection:'column',gap:12}}>{rows.map(([i,a,b],k)=><div key={k} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
    <Icon name={i} size={18} color="var(--text-subtle)" style={{marginTop:2}}/><div><div style={{font:'var(--type-label)',fontSize:'var(--text-md)',color:'var(--text-strong)'}}>{a}</div>{b&&<div style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{b}</div>}</div></div>)}</div>;
}
function ReviewStep({p,date,time,form,onEdit}){
  const {Card,Button,Icon}=window.NadmaiDesignSystem_0c4e36;
  return <div><StepTitle title="ตรวจสอบและยืนยัน" sub="ตรวจสอบรายละเอียดก่อนยืนยันนัดรับสินค้า"/>
    <Card padding={20}><SummaryRows p={p} date={date} time={time} form={form}/>
      <div style={{height:1,background:'var(--border-subtle)',margin:'16px 0'}}/>
      <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--type-body-sm)',color:form.gcal?'var(--text-brand)':'var(--text-muted)'}}><Icon name={form.gcal?'calendar-check':'calendar-x'} size={16}/>{form.gcal?'จะเพิ่มลงใน Google Calendar ของ '+(form.email||'คุณ'):'ไม่เพิ่มลงปฏิทิน'}</div>
      <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--type-body-sm)',color:'var(--text-muted)',marginTop:8}}><Icon name="bell" size={16}/>แจ้งเตือนก่อน {form.remind}</div>
    </Card>
    <div style={{marginTop:12}}><Button variant="ghost" size="sm" iconLeft="pencil" onClick={onEdit}>แก้ไขวันเวลา</Button></div></div>;
}
Object.assign(window,{ReviewStep,SummaryRows});