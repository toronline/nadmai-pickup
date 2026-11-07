import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
const S={connected:['var(--status-success)','เชื่อมต่อแล้ว'],syncing:['var(--teal-400)','กำลังซิงก์…'],error:['var(--status-danger)','ซิงก์ไม่สำเร็จ'],disconnected:['var(--stone-400)','ยังไม่ได้เชื่อมต่อ']};
export function CalendarSync({status='connected',account,calendarName='นัดหมาย',lastSync,onConnect,onDisconnect}){
  const [c,lbl]=S[status];const on=status!=='disconnected';
  return <div style={{display:'flex',alignItems:'center',gap:14,padding:'14px 16px',background:'var(--surface-card)',border:'1px solid '+(status==='error'?'var(--red-500)':'var(--border-default)'),borderRadius:'var(--radius-lg)'}}>
    <span style={{flex:'none',width:40,height:40,borderRadius:'var(--radius-md)',background:'var(--surface-brand-soft)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="calendar-check" size={22} color="var(--text-brand)"/></span>
    <div style={{flex:1,minWidth:0}}>
      <div style={{display:'flex',alignItems:'center',gap:8,font:'var(--type-label)',color:'var(--text-strong)'}}>Google Calendar<span style={{display:'inline-flex',alignItems:'center',gap:5,font:'var(--type-caption)',color:'var(--text-muted)'}}><span style={{width:7,height:7,borderRadius:'50%',background:c}}/>{lbl}</span></div>
      <div style={{font:'var(--type-caption)',color:'var(--text-subtle)',marginTop:3,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{on?(account+' · ปฏิทิน “'+calendarName+'”'+(lastSync?' · '+lastSync:'')):'เชื่อมต่อเพื่อเพิ่มนัดลงปฏิทินอัตโนมัติ'}</div></div>
    {status==='disconnected'&&<Button size="sm" iconLeft="link" onClick={onConnect}>เชื่อมต่อ</Button>}
    {status==='error'&&<Button size="sm" variant="secondary" iconLeft="refresh-cw" onClick={onConnect}>เชื่อมต่ออีกครั้ง</Button>}
    {(status==='connected'||status==='syncing')&&onDisconnect&&<Button size="sm" variant="ghost" onClick={onDisconnect}>ยกเลิกการเชื่อมต่อ</Button>}
  </div>;
}