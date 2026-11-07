function SettingsScreen({sync,setSync}){
  const {CalendarSync,Card,Switch,Select,Input}=window.NadmaiDesignSystem_0c4e36;
  const Sec=({t,d,children})=><section style={{display:'grid',gridTemplateColumns:'240px minmax(0,1fr)',gap:32,padding:'24px 0',borderBottom:'1px solid var(--border-default)'}}><div><div style={{font:'var(--type-title)',color:'var(--text-strong)'}}>{t}</div><div style={{font:'var(--type-body-sm)',color:'var(--text-muted)',marginTop:4}}>{d}</div></div><div style={{display:'flex',flexDirection:'column',gap:14}}>{children}</div></section>;
  const days=['จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์','อาทิตย์'];
  return <div><TopBar title="ตั้งค่า" sub="การเชื่อมต่อปฏิทินและเวลาทำการ"/>
    <div style={{padding:'0 28px',maxWidth:900}}>
      <Sec t="Google Calendar" d="นัดรับใหม่ เลื่อน และยกเลิก จะอัปเดตในปฏิทินโดยอัตโนมัติ">
        <CalendarSync status={sync} account="pickup@nadmai.app" lastSync={sync==='connected'?'ซิงก์ล่าสุด 2 นาทีที่แล้ว':undefined}
          onConnect={()=>{setSync('syncing');setTimeout(()=>setSync('connected'),1200);}} onDisconnect={()=>setSync('disconnected')}/>
        <Card padding={16} style={{display:'flex',flexDirection:'column',gap:16,opacity:sync==='disconnected'?.5:1}}>
          <Switch label="เพิ่มนัดรับใหม่ลงปฏิทินอัตโนมัติ" description="สร้าง event ทันทีที่ลูกค้ายืนยัน" defaultChecked/>
          <Switch label="ส่งคำเชิญให้ลูกค้า" description="ลูกค้าจะได้รับนัดรับพร้อมรหัสใน Google Calendar ของตัวเอง" defaultChecked/>
          <Switch label="แยกปฏิทินตามร้าน" description="แต่ละร้านมีปฏิทินของตัวเองใน Google Calendar"/>
        </Card>
        <Select label="ปฏิทินปลายทาง" iconLeft="calendar" options={['นัดรับสินค้า · ทุกร้าน','ปฏิทินหลัก']}/>
      </Sec>
      <Sec t="เวลาเปิดรับสินค้า" d="ช่วงเวลาที่ลูกค้าเลือกมารับได้">
        {days.map((d,i)=><div key={d} style={{display:'grid',gridTemplateColumns:'120px 140px 1fr',alignItems:'center',gap:16}}>
          <Switch label={d} defaultChecked/>
          {true?<span style={{font:'var(--type-time)',fontSize:14,color:'var(--text-body)'}}>10:00 – 20:00</span>:<span style={{font:'var(--type-body-sm)',color:'var(--text-disabled)'}}>ปิด</span>}<span/></div>)}
      </Sec>
      <Sec t="การนัดรับ" d="กฎสำหรับหน้านัดรับสาธารณะ">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}><Select label="ช่วงรับต่อคิว" options={['15 นาที','30 นาที','1 ชั่วโมง']} defaultValue="30 นาที"/><Select label="เก็บสินค้าไว้ให้หลังเวลานัด" options={['3 ชั่วโมง','24 ชั่วโมง','3 วัน']} defaultValue="24 ชั่วโมง"/></div>
        <Input label="ลิงก์หน้านัดรับ" iconLeft="link" defaultValue="nadmai.app/pickup"/>
      </Sec>
    </div></div>;
}
window.SettingsScreen=SettingsScreen;