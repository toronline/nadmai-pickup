import React from 'react';
export function Switch({label,description,checked,defaultChecked,onChange,disabled}){
  const [inner,setInner]=React.useState(!!defaultChecked);const on=checked??inner;
  const t=()=>{if(disabled)return;setInner(!on);onChange&&onChange(!on);};
  return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,opacity:disabled?.5:1}}>
    {(label||description)&&<div style={{display:'flex',flexDirection:'column',gap:2}}>
      {label&&<span style={{font:'var(--type-label)',color:'var(--text-strong)'}}>{label}</span>}
      {description&&<span style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{description}</span>}</div>}
    <button type="button" role="switch" aria-checked={on} onClick={t} style={{flex:'none',width:40,height:24,padding:2,border:0,borderRadius:'var(--radius-full)',cursor:disabled?'not-allowed':'pointer',
      background:on?'var(--action-primary)':'var(--stone-300)',transition:'background var(--duration-base) var(--ease-out)'}}>
      <span style={{display:'block',width:20,height:20,borderRadius:'50%',background:'#fff',boxShadow:'var(--shadow-sm)',transform:on?'translateX(16px)':'none',transition:'transform var(--duration-base) var(--ease-out)'}}/></button>
  </div>;
}