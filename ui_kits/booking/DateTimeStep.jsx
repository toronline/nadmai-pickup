function DateTimeStep({date,time,onDate,onTime}){
  const {MiniCalendar,TimeSlot,Card,Icon}=window.NadmaiDesignSystem_0c4e36;const D=window.BK_DATA;
  return <div><StepTitle title="เลือกวันและเวลารับ" sub={'ช่วงรับ 30 นาที · แสดงตาม'+D.platform.tz}/>
    <Card padding={16} style={{marginBottom:20}}><MiniCalendar today={D.today} minDate={D.today} value={date} onChange={d=>{onDate(d);onTime(null);}}/></Card>
    {date?<div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div style={{font:'var(--type-title)',color:'var(--text-strong)'}}>{window.BK_FMT(date)}</div>
      {Object.entries(D.slots).map(([k,list])=><div key={k}><div style={{font:'var(--type-caption)',color:'var(--text-subtle)',marginBottom:8}}>{k}</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(84px,1fr))',gap:8}}>{list.map(t=><TimeSlot key={t} time={t} disabled={D.full.includes(t)} note={t==='14:30'?'คิวเหลือ 1':undefined} selected={t===time} onClick={()=>onTime(t)}/>)}</div></div>)}
    </div>:<div style={{display:'flex',alignItems:'center',gap:8,font:'var(--type-body-sm)',color:'var(--text-subtle)'}}><Icon name="calendar" size={16}/>เลือกวันเพื่อดูช่วงเวลารับ</div>}
  </div>;
}
window.DateTimeStep=DateTimeStep;