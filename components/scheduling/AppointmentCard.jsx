import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../display/Badge.jsx';
const ST={confirmed:['success','ยืนยันแล้ว'],pending:['warning','รอยืนยัน'],ready:['info','พร้อมรับ'],cancelled:['danger','ยกเลิก'],completed:['neutral','เสร็จสิ้น']};
export function AppointmentCard({service,dateLabel,time,customer,staff,location,status='confirmed',statusLabel,staffIcon='user-round',synced=true,color='var(--event-teal)',compact,onClick,actions}){
  const [tone,l0]=ST[status];const lbl=statusLabel||l0;
  const Row=({icon,children})=><span style={{display:'flex',alignItems:'center',gap:6,font:'var(--type-body-sm)',color:'var(--text-muted)'}}><Icon name={icon} size={15} color="var(--text-subtle)"/>{children}</span>;
  return <div onClick={onClick} style={{display:'flex',background:'var(--surface-card)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',overflow:'hidden',cursor:onClick?'pointer':undefined,boxShadow:'var(--shadow-xs)',opacity:status==='cancelled'?.7:1}}>
    <div style={{flex:'none',width:compact?72:84,padding:'14px 0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,background:'var(--surface-sunken)',borderRight:'1px solid var(--border-subtle)'}}>
      <span style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{dateLabel}</span>
      <span style={{font:'var(--type-time)',fontSize:compact?16:18,color:'var(--text-strong)'}}>{time}</span></div>
    <div style={{flex:1,minWidth:0,padding:compact?'12px 14px':'14px 16px',display:'flex',flexDirection:'column',gap:6}}>
      <div style={{display:'flex',alignItems:'center',gap:8}}><span style={{width:8,height:8,borderRadius:2,background:color,flex:'none'}}/>
        <span style={{font:'var(--type-title)',fontSize:'var(--text-md)',color:'var(--text-strong)',flex:1,minWidth:0,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',textDecoration:status==='cancelled'?'line-through':'none'}}>{service}</span>
        <Badge tone={tone} dot>{lbl}</Badge></div>
      {!compact&&<div style={{display:'flex',flexWrap:'wrap',gap:'4px 16px'}}>{customer&&<Row icon="user">{customer}</Row>}{staff&&<Row icon={staffIcon}>{staff}</Row>}{location&&<Row icon="map-pin">{location}</Row>}</div>}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
        <span style={{display:'flex',alignItems:'center',gap:5,font:'var(--type-caption)',color:synced?'var(--text-brand)':'var(--status-warning-ink)'}}><Icon name={synced?'calendar-check':'calendar-clock'} size={14}/>{synced?'อยู่ใน Google Calendar':'รอซิงก์'}</span>
        {actions}</div>
    </div></div>;
}