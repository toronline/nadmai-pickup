import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function ServiceOption({title,description,duration,price,color='var(--event-teal)',selected,onClick}){
  const [h,setH]=React.useState(false);
  return <button type="button" onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} aria-pressed={selected}
    style={{width:'100%',textAlign:'left',display:'flex',gap:14,alignItems:'center',padding:'14px 16px',background:selected?'var(--surface-brand-soft)':'var(--surface-card)',cursor:'pointer',
    border:'1px solid '+(selected?'var(--border-brand)':h?'var(--border-strong)':'var(--border-default)'),borderRadius:'var(--radius-lg)',boxShadow:selected?'0 0 0 1px var(--border-brand)':'none',transition:'all var(--duration-fast)'}}>
    <span style={{flex:'none',width:10,height:40,borderRadius:'var(--radius-full)',background:color}}/>
    <span style={{flex:1,minWidth:0,display:'flex',flexDirection:'column',gap:3}}>
      <span style={{font:'var(--type-title)',fontSize:'var(--text-md)',color:'var(--text-strong)'}}>{title}</span>
      {description&&<span style={{font:'var(--type-body-sm)',color:'var(--text-muted)',lineHeight:1.45}}>{description}</span>}
      <span style={{display:'flex',gap:12,font:'var(--type-caption)',color:'var(--text-subtle)',marginTop:2}}>
        {duration&&<span style={{display:'flex',alignItems:'center',gap:4}}><Icon name="clock" size={13}/>{duration}</span>}
        {price&&<span style={{font:'500 12px/1.3 var(--font-mono)',color:'var(--text-body)'}}>{price}</span>}</span></span>
    <span style={{flex:'none',width:22,height:22,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:selected?'var(--action-primary)':'transparent',border:selected?0:'1.5px solid var(--border-strong)'}}>{selected&&<Icon name="check" size={14} color="#fff"/>}</span>
  </button>;
}