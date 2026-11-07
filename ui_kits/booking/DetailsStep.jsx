function DetailsStep({form,setForm}){
  const {Input,Textarea,Select,Checkbox,Card,Switch}=window.NadmaiDesignSystem_0c4e36;
  const up=k=>e=>setForm({...form,[k]:e.target.value});
  return <div><StepTitle title="ข้อมูลผู้รับ" sub="ร้านจะใช้ข้อมูลนี้ยืนยันตัวตนตอนรับสินค้า"/>
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <Input id="n" label="ชื่อผู้รับ" required placeholder="เช่น มาลี กิตติ" value={form.name} onChange={up('name')}/>
      <Input id="p" label="เบอร์โทรศัพท์" type="tel" iconLeft="phone" required placeholder="08x-xxx-xxxx" value={form.phone} onChange={up('phone')}/>
      <Input id="e" label="อีเมล Google" type="email" iconLeft="mail" placeholder="you@gmail.com" hint="เราจะส่งนัดรับสินค้าเข้า Google Calendar ที่อีเมลนี้" value={form.email} onChange={up('email')}/>
      <Textarea id="t" label="หมายเหตุถึงร้าน (ไม่บังคับ)" rows={3} placeholder="เช่น ให้คนอื่นมารับแทน" value={form.note} onChange={up('note')}/>
      <Card padding={16} style={{display:'flex',flexDirection:'column',gap:14}}>
        <Switch label="เพิ่มลงใน Google Calendar อัตโนมัติ" description="สร้างนัดรับในปฏิทินของคุณทันทีที่ยืนยัน" checked={form.gcal} onChange={v=>setForm({...form,gcal:v})}/>
        <Select label="แจ้งเตือนก่อน" iconLeft="bell" options={['15 นาที','30 นาที','1 ชั่วโมง','1 วัน']} value={form.remind} onChange={up('remind')}/>
      </Card>
      <Checkbox label="ยอมรับเงื่อนไขการรับสินค้า" description="ร้านเก็บสินค้าไว้ให้ 24 ชั่วโมงหลังเวลานัด" checked={form.terms} onChange={v=>setForm({...form,terms:v})}/>
    </div></div>;
}
window.DetailsStep=DetailsStep;