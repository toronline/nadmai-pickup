function ConfirmedStep({p,date,time,form,code,onRestart}){
  const {Card,Button,Icon,Toast}=window.NadmaiDesignSystem_0c4e36;
  const [toast,setToast]=React.useState(form.gcal);
  React.useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(false),4000);return()=>clearTimeout(t);},[toast]);
  return <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
    <div style={{width:64,height:64,borderRadius:'50%',background:'var(--status-success-soft)',display:'flex',alignItems:'center',justifyContent:'center',marginTop:16}}><Icon name="check" size={32} color="var(--status-success)"/></div>
    <h1 style={{margin:'16px 0 4px',font:'var(--type-h2)',color:'var(--text-strong)'}}>นัดรับสินค้าเรียบร้อย</h1>
    <p style={{margin:0,font:'var(--type-body-sm)',color:'var(--text-muted)'}}>แสดงรหัสนี้ที่ร้านตอนรับสินค้า</p>
    <div style={{marginTop:14,padding:'12px 24px',borderRadius:'var(--radius-lg)',background:'var(--surface-card)',border:'1px dashed var(--border-strong)',font:'600 36px/1 var(--font-mono)',letterSpacing:'0.12em',color:'var(--text-strong)'}}>{code}</div>
    <Card padding={20} style={{width:'100%',boxSizing:'border-box',textAlign:'left',marginTop:20}}><SummaryRows p={p} date={date} time={time}/></Card>
    {form.gcal&&<div style={{width:'100%',boxSizing:'border-box',display:'flex',gap:12,alignItems:'center',textAlign:'left',marginTop:12,padding:'14px 16px',background:'var(--surface-brand-soft)',borderRadius:'var(--radius-lg)'}}>
      <Icon name="calendar-check" size={22} color="var(--text-brand)"/><div style={{flex:1}}><div style={{font:'var(--type-label)',color:'var(--teal-800)'}}>เพิ่มลงใน Google Calendar แล้ว</div><div style={{font:'var(--type-caption)',color:'var(--teal-700)'}}>{form.email||'you@gmail.com'} · แจ้งเตือนก่อน {form.remind}</div></div></div>}
    <div style={{display:'flex',gap:8,width:'100%',marginTop:20}}>
      <Button variant="secondary" iconLeft="navigation" fullWidth>นำทางไปร้าน</Button>
      <Button variant="ghost" iconLeft="rotate-ccw" onClick={onRestart}>นัดรับอีกรายการ</Button></div>
    <div style={{display:'flex',gap:16,marginTop:20}}><a href="#">เลื่อนเวลารับ</a><a href="#" style={{color:'var(--status-danger)'}}>ยกเลิกนัดรับ</a></div>
    {toast&&<div style={{position:'fixed',left:'50%',bottom:24,transform:'translateX(-50%)',zIndex:20,width:'calc(100% - 32px)',maxWidth:360}}><Toast tone="sync" title="เพิ่มลงใน Google Calendar แล้ว" description={window.BK_FMT(date)+' · '+time} onClose={()=>setToast(false)}/></div>}
  </div>;
}
window.ConfirmedStep=ConfirmedStep;