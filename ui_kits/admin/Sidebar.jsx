function Sidebar({route,onRoute,pending}){
  const {Icon,Avatar,Badge}=window.NadmaiDesignSystem_0c4e36;
  const items=[['calendar','calendar-days','ปฏิทินรับสินค้า'],['list','package','นัดรับ',pending],['shops','store','ร้านค้า'],['customers','users','ลูกค้า'],['settings','settings','ตั้งค่า']];
  return <aside style={{width:'var(--sidebar-width)',flex:'none',background:'var(--surface-card)',borderRight:'1px solid var(--border-default)',display:'flex',flexDirection:'column',height:'100vh',position:'sticky',top:0,boxSizing:'border-box',padding:'18px 12px'}}>
    <div style={{font:'600 20px/1 var(--font-sans)',color:'var(--text-strong)',padding:'4px 10px 22px',letterSpacing:'-0.01em'}}>นัดรับสินค้า</div>
    <nav style={{display:'flex',flexDirection:'column',gap:2}}>{items.map(([k,ic,l,c])=>{const on=route===k;
      return <button key={k} onClick={()=>onRoute(k)} style={{display:'flex',alignItems:'center',gap:10,height:40,padding:'0 10px',border:0,borderRadius:'var(--radius-md)',cursor:'pointer',textAlign:'left',
        background:on?'var(--surface-brand-soft)':'transparent',color:on?'var(--teal-800)':'var(--text-body)',font:'var(--type-label)'}}
        onMouseEnter={e=>{if(!on)e.currentTarget.style.background='var(--stone-50)';}} onMouseLeave={e=>{if(!on)e.currentTarget.style.background='transparent';}}>
        <Icon name={ic} size={20} color={on?'var(--text-brand)':'var(--text-subtle)'}/><span style={{flex:1}}>{l}</span>{c?<Badge tone="warning">{c}</Badge>:null}</button>;})}</nav>
    <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:12}}>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'10px',borderRadius:'var(--radius-md)',background:'var(--stone-50)',font:'var(--type-caption)',color:'var(--text-muted)'}}><span style={{width:7,height:7,borderRadius:'50%',background:'var(--status-success)'}}/>Google Calendar · ซิงก์แล้ว</div>
      <div style={{display:'flex',alignItems:'center',gap:10,padding:'0 6px'}}><Avatar name="Pickup Point" size={32}/><div style={{minWidth:0}}><div style={{font:'var(--type-label)',color:'var(--text-strong)'}}>ผู้ดูแลจุดรับ</div><div style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>4 ร้านค้า</div></div></div>
    </div></aside>;
}
function TopBar({title,sub,children}){
  return <div style={{display:'flex',alignItems:'center',gap:12,padding:'18px 28px',borderBottom:'1px solid var(--border-default)',background:'var(--surface-card)'}}>
    <div style={{flex:1,minWidth:0}}><h1 style={{margin:0,font:'var(--type-h3)',color:'var(--text-strong)'}}>{title}</h1>{sub&&<div style={{font:'var(--type-caption)',color:'var(--text-subtle)',marginTop:2}}>{sub}</div>}</div>{children}</div>;
}
Object.assign(window,{Sidebar,TopBar});