import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T={success:['circle-check-big','var(--green-500)'],info:['info','var(--teal-300)'],warning:['triangle-alert','var(--marigold-300)'],danger:['circle-alert','#E9806E'],sync:['calendar-check','var(--teal-300)']};
export function Toast({tone='success',title,description,action,onAction,onClose}){
  const [ic,c]=T[tone];
  return <div role="status" style={{display:'flex',alignItems:'flex-start',gap:12,width:360,maxWidth:'100%',padding:'14px 14px 14px 16px',background:'var(--surface-inverse)',color:'var(--text-inverse)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',animation:'nm-fade-up var(--duration-slow) var(--ease-out)'}}>
    <Icon name={ic} size={20} color={c} style={{marginTop:1}}/>
    <div style={{flex:1,minWidth:0}}><div style={{font:'var(--type-label)'}}>{title}</div>{description&&<div style={{font:'var(--type-caption)',color:'var(--stone-300)',marginTop:3}}>{description}</div>}</div>
    {action&&<button onClick={onAction} style={{border:0,background:'none',color:'var(--teal-200)',font:'var(--type-label)',cursor:'pointer',padding:'0 4px'}}>{action}</button>}
    {onClose&&<button onClick={onClose} aria-label="ปิด" style={{border:0,background:'none',color:'var(--stone-400)',cursor:'pointer',padding:0,display:'flex'}}><Icon name="x" size={16}/></button>}
  </div>;
}