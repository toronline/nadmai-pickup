import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({icon,label,size='md',variant='ghost',onClick,disabled,active}){
  const [h,setH]=React.useState(false);
  const d={sm:32,md:40,lg:48}[size];const ic={sm:16,md:20,lg:22}[size];
  const bg=active?'var(--surface-brand-soft)':variant==='secondary'?(h?'var(--stone-50)':'#fff'):(h?'var(--action-ghost-hover)':'transparent');
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-md)',padding:0,cursor:disabled?'not-allowed':'pointer',
    background:bg,color:disabled?'var(--text-disabled)':active?'var(--text-brand)':'var(--text-muted)',border:variant==='secondary'?'1px solid var(--border-default)':'1px solid transparent',transition:'background var(--duration-fast)'}}>
    <Icon name={icon} size={ic}/></button>;
}