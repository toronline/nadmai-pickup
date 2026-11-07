import React from 'react';
export function Textarea({label,hint,placeholder,value,defaultValue,onChange,rows=3,id}){
  const [f,setF]=React.useState(false);
  return <div style={{display:'flex',flexDirection:'column',gap:6}}>
    {label&&<label htmlFor={id} style={{font:'var(--type-label)',color:'var(--text-strong)'}}>{label}</label>}
    <textarea id={id} rows={rows} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
      style={{resize:'vertical',padding:'10px 12px',font:'var(--type-body-sm)',color:'var(--text-strong)',background:'var(--surface-card)',outline:0,
      border:'1px solid '+(f?'var(--border-focus)':'var(--border-default)'),borderRadius:'var(--radius-md)',boxShadow:f?'var(--focus-ring)':'none'}}/>
    {hint&&<div style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{hint}</div>}
  </div>;
}