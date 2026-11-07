import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({label,description,checked,defaultChecked,onChange,disabled}){
  const [inner,setInner]=React.useState(!!defaultChecked);const on=checked??inner;
  const toggle=()=>{if(disabled)return;setInner(!on);onChange&&onChange(!on);};
  return <label onClick={e=>{e.preventDefault();toggle();}} style={{display:'flex',gap:10,alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1}}>
    <span role="checkbox" aria-checked={on} tabIndex={0} onKeyDown={e=>{if(e.key===' '){e.preventDefault();toggle();}}} style={{flex:'none',width:20,height:20,marginTop:1,borderRadius:'var(--radius-xs)',display:'flex',alignItems:'center',justifyContent:'center',
      background:on?'var(--action-primary)':'var(--surface-card)',border:'1.5px solid '+(on?'var(--action-primary)':'var(--border-strong)'),transition:'all var(--duration-fast)'}}>{on&&<Icon name="check" size={14} color="#fff"/>}</span>
    <span style={{display:'flex',flexDirection:'column',gap:2}}><span style={{font:'var(--type-body-sm)',color:'var(--text-strong)'}}>{label}</span>
    {description&&<span style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{description}</span>}</span>
  </label>;
}