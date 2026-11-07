insert into public.shops (slug,name,description,address,color,open_time,close_time) values
('bake-me-siam','Bake Me · สยาม','ชั้น 2 สยามสแควร์วัน · จุดรับหน้าร้าน','สยามสแควร์วัน ชั้น 2','#E09A2A','10:00','20:00'),
('green-grocer-ari','Green Grocer · อารีย์','ผักผลไม้ออร์แกนิก · รับที่เคาน์เตอร์','ซอยอารีย์ 4','#6E7F2E','08:00','18:00'),
('gadget-hub-ladprao','Gadget Hub · ลาดพร้าว','เซ็นทรัลลาดพร้าว ชั้น 3 · ต้องแสดงบัตรประชาชน','เซ็นทรัลลาดพร้าว ชั้น 3','#4F5DA8','10:00','21:00'),
('flower-pakklong','ร้านดอกไม้ป้าแดง · ปากคลอง','ช่อดอกไม้สั่งทำ · รับหน้าร้าน','ปากคลองตลาด ล็อก 12','#C45B74','06:00','17:00')
on conflict (slug) do nothing;
