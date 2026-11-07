function ListScreen({appts,onOpen,onUpdate}){
  const {Tabs,Input,AppointmentCard,Button}=window.NadmaiDesignSystem_0c4e36;const D=window.AD_DATA;
  const [tab,setTab]=React.useState('p');
  const by={p:a=>a.status==='pending',r:a=>a.status==='ready',d:a=>a.status==='completed',c:a=>a.status==='cancelled'};
  const list=appts.filter(by[tab]);
  const dl=a=>D.week[a.day].d+' '+D.week[a.day].n+' พ.ย.';
  return <div><TopBar title="นัดรับ" sub="รายการนัดรับสินค้าทุกร้าน"><div style={{width:260}}><Input size="sm" iconLeft="search" placeholder="ค้นหาชื่อ เบอร์ หรือรหัสรับ"/></div><Button variant="secondary" iconLeft="download">ส่งออก</Button></TopBar>
    <div style={{padding:'0 28px',background:'var(--surface-card)',borderBottom:'1px solid var(--border-default)'}}><Tabs value={tab} onChange={setTab} items={[{value:'p',label:'รอเตรียม',count:appts.filter(by.p).length},{value:'r',label:'พร้อมรับ',count:appts.filter(by.r).length},{value:'d',label:'รับแล้ว'},{value:'c',label:'ยกเลิก'}]}/></div>
    <div style={{padding:'20px 28px',display:'flex',flexDirection:'column',gap:10,maxWidth:820}}>
      {list.map(a=><AppointmentCard key={a.id} service={a.item+(a.order?' · #'+a.order:'')} dateLabel={dl(a)} time={a.start} customer={a.customer} staff={D.shops[a.shop].name} staffIcon="store" status={a.status} statusLabel={D.statusLabel[a.status]} synced={a.synced} color={D.shops[a.shop].color} onClick={()=>onOpen(a)}
        actions={a.status==='pending'?<Button size="sm" variant="soft" iconLeft="package-check" onClick={e=>{e.stopPropagation();onUpdate({...a,status:'ready',synced:true});}}>พร้อมรับ</Button>:a.status==='ready'?<Button size="sm" variant="soft" iconLeft="check" onClick={e=>{e.stopPropagation();onUpdate({...a,status:'completed'});}}>รับแล้ว</Button>:null}/>)}
      {!list.length&&<div style={{padding:40,textAlign:'center',font:'var(--type-body-sm)',color:'var(--text-subtle)'}}>ไม่มีนัดรับในหมวดนี้</div>}
    </div></div>;
}
window.ListScreen=ListScreen;