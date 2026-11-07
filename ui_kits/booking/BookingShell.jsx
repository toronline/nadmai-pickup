const {Stepper,Icon,Avatar}=window.NadmaiDesignSystem_0c4e36;
function BookingShell({step,shop,children,footer}){
  const p=window.BK_DATA.platform;
  return <div style={{minHeight:'100vh',background:'var(--bg-app)',display:'flex',flexDirection:'column',alignItems:'center'}}>
    <header style={{width:'100%',background:'var(--surface-card)',borderBottom:'1px solid var(--border-default)'}}>
      <div style={{maxWidth:'var(--container-booking)',margin:'0 auto',padding:'16px 20px',display:'flex',alignItems:'center',gap:12}}>
        <span style={{width:40,height:40,borderRadius:'var(--radius-md)',background:'var(--surface-brand-soft)',display:'flex',alignItems:'center',justifyContent:'center',flex:'none'}}><Icon name="package-check" size={22} color="var(--text-brand)"/></span>
        <div style={{flex:1,minWidth:0}}><div style={{font:'var(--type-title)',color:'var(--text-strong)'}}>{p.name}</div>
        <div style={{display:'flex',alignItems:'center',gap:4,font:'var(--type-caption)',color:'var(--text-subtle)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}><Icon name={shop?'store':'map-pin'} size={13}/>{shop?shop.title:'เลือกร้านที่จะไปรับสินค้า'}</div></div>
      </div>
      {step<4&&<div style={{maxWidth:'var(--container-booking)',margin:'0 auto',padding:'0 20px 16px'}}><Stepper steps={['ร้านค้า','วันเวลา','ข้อมูล','ยืนยัน']} current={step}/></div>}
    </header>
    <main key={step} style={{width:'100%',maxWidth:'var(--container-booking)',padding:'24px 20px 120px',boxSizing:'border-box',animation:'nm-fade-up var(--duration-slow) var(--ease-out)'}}>{children}</main>
    {footer&&<div style={{position:'fixed',left:0,right:0,bottom:0,background:'rgba(255,255,255,.92)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',borderTop:'1px solid var(--border-default)'}}>
      <div style={{maxWidth:'var(--container-booking)',margin:'0 auto',padding:'12px 20px',display:'flex',alignItems:'center',gap:12}}>{footer}</div></div>}
  </div>;
}
function StepTitle({title,sub}){return <div style={{marginBottom:20}}><h1 style={{margin:0,font:'var(--type-h2)',color:'var(--text-strong)'}}>{title}</h1>{sub&&<p style={{margin:'4px 0 0',font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{sub}</p>}</div>;}
Object.assign(window,{BookingShell,StepTitle});