function CalendarScreen({appts,onOpen,onNew}){
  const {Button,IconButton,Tabs,Tag}=window.NadmaiDesignSystem_0c4e36;const D=window.AD_DATA;
  const [hide,setHide]=React.useState([]);
  const tog=k=>setHide(hide.includes(k)?hide.filter(x=>x!==k):[...hide,k]);
  const shown=appts.filter(a=>!hide.includes(a.shop));
  return <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
    <TopBar title="9 – 15 พ.ย. 2569" sub={shown.filter(a=>a.status!=='cancelled').length+' นัดรับในสัปดาห์นี้ · ซิงก์กับ Google Calendar แล้ว'}>
      <div style={{display:'flex',gap:4}}><IconButton icon="chevron-left" label="สัปดาห์ก่อน" variant="secondary"/><IconButton icon="chevron-right" label="สัปดาห์ถัดไป" variant="secondary"/></div>
      <Button variant="secondary">วันนี้</Button>
      <Tabs variant="segmented" items={['วัน','สัปดาห์','เดือน']} defaultValue="สัปดาห์"/>
      <Button iconLeft="plus" onClick={onNew}>สร้างนัดรับ</Button>
    </TopBar>
    <div style={{display:'flex',gap:8,alignItems:'center',padding:'10px 28px',borderBottom:'1px solid var(--border-default)',background:'var(--surface-card)'}}>
      <span style={{font:'var(--type-caption)',color:'var(--text-subtle)',marginRight:4}}>ร้านค้า</span>
      {Object.entries(D.shops).map(([k,s])=><button key={k} onClick={()=>tog(k)} style={{border:0,background:'none',padding:0,cursor:'pointer',opacity:hide.includes(k)?.4:1}}><Tag color={s.color}>{s.short}</Tag></button>)}
      <span style={{flex:1}}/><span style={{display:'flex',gap:14,font:'var(--type-caption)',color:'var(--text-subtle)'}}><span>เส้นประ = รอเตรียม</span><span>เทา = รับแล้ว</span></span></div>
    <WeekCalendar appts={shown} onOpen={onOpen}/>
  </div>;
}
window.CalendarScreen=CalendarScreen;