function ShopStep({shop,onShop,item,onItem,order,onOrder}){
  const {ServiceOption,Input}=window.NadmaiDesignSystem_0c4e36;
  return <div><StepTitle title="นัดรับสินค้าที่ร้านไหน" sub="เลือกร้าน แล้วพิมพ์สินค้าที่จะไปรับ"/>
    <div style={{display:'flex',flexDirection:'column',gap:10}}>{window.BK_DATA.shops.map(s=><ServiceOption key={s.id} {...s} selected={shop===s.id} onClick={()=>onShop(s.id)}/>)}</div>
    <div style={{display:'flex',flexDirection:'column',gap:16,marginTop:24}}>
      <Input id="item" label="สินค้าที่จะรับ" required size="lg" iconLeft="package" placeholder="เช่น เค้กวันเกิด 2 ปอนด์" value={item} onChange={e=>onItem(e.target.value)}/>
      <Input id="order" label="เลขที่คำสั่งซื้อ (ถ้ามี)" iconLeft="receipt" placeholder="เช่น A-1042" value={order} onChange={e=>onOrder(e.target.value)}/>
    </div></div>;
}
window.ShopStep=ShopStep;