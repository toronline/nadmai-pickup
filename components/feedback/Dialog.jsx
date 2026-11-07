import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({open=true,title,description,children,footer,onClose,width=440,inline}){
  if(!open)return null;
  const panel=<div role="dialog" aria-modal="true" style={{width,maxWidth:'calc(100vw - 32px)',background:'var(--surface-raised)',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)',animation:'nm-fade-up var(--duration-slow) var(--ease-out)',overflow:'hidden'}}>
    <div style={{display:'flex',alignItems:'flex-start',gap:12,padding:'20px 20px 0 24px'}}>
      <div style={{flex:1,paddingTop:4}}>{title&&<div style={{font:'var(--type-h3)',color:'var(--text-strong)'}}>{title}</div>}
      {description&&<div style={{font:'var(--type-body-sm)',color:'var(--text-muted)',marginTop:6}}>{description}</div>}</div>
      {onClose&&<IconButton icon="x" label="ปิด" size="sm" onClick={onClose}/>}</div>
    {children&&<div style={{padding:'16px 24px 0'}}>{children}</div>}
    {footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:8,padding:'20px 24px 24px'}}>{footer}</div>}
    {!footer&&<div style={{height:24}}/>}
  </div>;
  if(inline)return panel;
  return <div onClick={e=>{if(e.target===e.currentTarget&&onClose)onClose();}} style={{position:'fixed',inset:0,zIndex:50,background:'var(--overlay-scrim)',display:'flex',alignItems:'center',justifyContent:'center',animation:'nm-fade var(--duration-base)'}}>{panel}</div>;
}