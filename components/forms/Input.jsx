import React from 'react';
import { Icon } from '../core/Icon.jsx';
function Field({label,hint,error,required,children,htmlFor}){
  return <div style={{display:'flex',flexDirection:'column',gap:6}}>
    {label&&<label htmlFor={htmlFor} style={{font:'var(--type-label)',color:'var(--text-strong)'}}>{label}{required&&<span style={{color:'var(--status-danger)'}}> *</span>}</label>}
    {children}
    {(error||hint)&&<div style={{font:'var(--type-caption)',color:error?'var(--status-danger)':'var(--text-subtle)'}}>{error||hint}</div>}
  </div>;
}
export function Input({label,hint,error,required,iconLeft,placeholder,value,defaultValue,onChange,type='text',disabled,id,size='md'}){
  const [f,setF]=React.useState(false);
  const h={sm:'var(--control-sm)',md:'var(--control-md)',lg:'var(--control-lg)'}[size];
  return <Field label={label} hint={hint} error={error} required={required} htmlFor={id}>
    <div style={{display:'flex',alignItems:'center',gap:8,height:h,padding:'0 12px',background:disabled?'var(--surface-sunken)':'var(--surface-card)',
      border:'1px solid '+(error?'var(--status-danger)':f?'var(--border-focus)':'var(--border-default)'),borderRadius:'var(--radius-md)',
      boxShadow:f?(error?'0 0 0 3px rgba(194,65,45,.2)':'var(--focus-ring)'):'none',transition:'border-color var(--duration-fast),box-shadow var(--duration-fast)'}}>
      {iconLeft&&<Icon name={iconLeft} size={18} color="var(--text-subtle)"/>}
      <input id={id} type={type} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
        onFocus={()=>setF(true)} onBlur={()=>setF(false)}
        style={{flex:1,minWidth:0,border:0,outline:0,background:'transparent',font:'var(--type-body)',fontSize:'var(--text-sm)',color:'var(--text-strong)',padding:0,height:'100%'}}/>
    </div></Field>;
}