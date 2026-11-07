import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Tag({children,color,icon,onRemove}){
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:28,padding:'0 10px',borderRadius:'var(--radius-sm)',background:'var(--surface-card)',border:'1px solid var(--border-default)',font:'var(--weight-medium) var(--text-xs)/1 var(--font-sans)',color:'var(--text-body)'}}>
    {color&&<span style={{width:8,height:8,borderRadius:2,background:color}}/>}{icon&&<Icon name={icon} size={14} color="var(--text-subtle)"/>}{children}
    {onRemove&&<button onClick={onRemove} aria-label="remove" style={{display:'flex',border:0,background:'none',padding:0,cursor:'pointer',color:'var(--text-subtle)'}}><Icon name="x" size={14}/></button>}</span>;
}