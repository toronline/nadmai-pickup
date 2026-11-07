function WeekCalendar({appts,onOpen}){
  const {Icon}=window.NadmaiDesignSystem_0c4e36;const D=window.AD_DATA;const H=56;const start=D.hours[0];
  const pos=t=>{const [h,m]=t.split(':').map(Number);return (h-start+m/60)*H;};
  return <div style={{flex:1,overflow:'auto',background:'var(--surface-card)'}}>
    <div style={{display:'grid',gridTemplateColumns:'56px repeat(7,minmax(110px,1fr))',position:'sticky',top:0,zIndex:4,background:'var(--surface-card)',borderBottom:'1px solid var(--border-default)'}}>
      <div/>{D.week.map((d,i)=><div key={i} style={{padding:'10px 10px 8px',borderLeft:'1px solid var(--border-subtle)',display:'flex',alignItems:'baseline',gap:6}}>
        <span style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{d.d}</span><span style={{font:'600 18px/1 var(--font-sans)',color:i===5?'#fff':'var(--text-strong)',background:i===5?'var(--today)':'transparent',borderRadius:'var(--radius-full)',padding:i===5?'4px 8px':0}}>{d.n}</span></div>)}</div>
    <div style={{display:'grid',gridTemplateColumns:'56px repeat(7,minmax(110px,1fr))',position:'relative'}}>
      <div>{D.hours.map(h=><div key={h} style={{height:H,font:'400 11px/1 var(--font-mono)',color:'var(--text-subtle)',textAlign:'right',paddingRight:8,transform:'translateY(-6px)'}}>{String(h).padStart(2,'0')}:00</div>)}</div>
      {D.week.map((d,i)=><div key={i} style={{position:'relative',borderLeft:'1px solid var(--border-subtle)'}}>
        {D.hours.map(h=><div key={h} style={{height:H,borderTop:'1px solid var(--border-subtle)',boxSizing:'border-box'}}/>)}
        {appts.filter(a=>a.day===i).map(a=>{const c=a.status==='cancelled',done=a.status==='completed';const col=D.shops[a.shop].color;
          return <button key={a.id} onClick={()=>onOpen(a)} style={{position:'absolute',left:4,right:4,top:pos(a.start)+1,height:Math.max(a.mins/60*H-3,26),boxSizing:'border-box',textAlign:'left',cursor:'pointer',overflow:'hidden',
          border:0,borderRadius:'var(--radius-sm)',padding:'4px 8px',background:c||done?'var(--stone-100)':'color-mix(in oklab,'+col+' 14%,white)',
          boxShadow:'inset 3px 0 0 '+(c||done?'var(--stone-300)':col)+(a.isNew?',0 0 0 2px var(--marigold-500),var(--shadow-md)':''),zIndex:a.isNew?3:undefined,animation:a.isNew?'nm-fade-up var(--duration-slow) var(--ease-out)':undefined,
          opacity:c?.7:1,outline:a.status==='pending'?'1px dashed '+col:'none',outlineOffset:-1}}>
          <div style={{display:'flex',alignItems:'center',gap:4,font:'600 12px/1.3 var(--font-sans)',color:'var(--text-strong)',textDecoration:c?'line-through':'none',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
            {a.status==='ready'&&<Icon name="package-check" size={12} color="var(--status-info)"/>}{done&&<Icon name="check" size={12} color="var(--text-subtle)"/>}{!a.synced&&<Icon name="calendar-clock" size={12} color="var(--status-warning)"/>}{a.start} {a.customer}</div>
          <div style={{font:'400 11px/1.3 var(--font-sans)',color:'var(--text-muted)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{a.item}</div></button>;})}
        {i===5&&<div style={{position:'absolute',left:0,right:0,top:pos('12:20'),height:2,background:'var(--today)',zIndex:2}}><span style={{position:'absolute',left:-4,top:-3,width:8,height:8,borderRadius:'50%',background:'var(--today)'}}/></div>}
      </div>)}
    </div></div>;
}
window.WeekCalendar=WeekCalendar;