import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Select({label,options=[],value,defaultValue,onChange,id,disabled,iconLeft}){
  const [f,setF]=React.useState(false);
  return <div style={{display:'flex',flexDirection:'column',gap:6}}>
    {label&&<label htmlFor={id} style={{font:'var(--type-label)',color:'var(--text-strong)'}}>{label}</label>}
    <div style={{position:'relative',display:'flex',alignItems:'center',height:'var(--control-md)',background:'var(--surface-card)',border:'1px solid '+(f?'var(--border-focus)':'var(--border-default)'),borderRadius:'var(--radius-md)',boxShadow:f?'var(--focus-ring)':'none'}}>
      {iconLeft&&<Icon name={iconLeft} size={18} color="var(--text-subtle)" style={{position:'absolute',left:12,pointerEvents:'none'}}/>}
      <select id={id} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
        style={{appearance:'none',WebkitAppearance:'none',flex:1,height:'100%',border:0,outline:0,background:'transparent',padding:'0 36px 0 '+(iconLeft?38:12)+'px',font:'var(--type-body-sm)',color:'var(--text-strong)',cursor:'pointer'}}>
        {options.map(o=>{const v=typeof o==='string'?{value:o,label:o}:o;return <option key={v.value} value={v.value}>{v.label}</option>;})}
      </select>
      <Icon name="chevron-down" size={16} color="var(--text-subtle)" style={{position:'absolute',right:12,pointerEvents:'none'}}/>
    </div></div>;
}