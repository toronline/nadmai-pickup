import React from 'react';
export function Card({children,padding=20,elevated,interactive,selected,onClick,style}){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',padding,
    border:'1px solid '+(selected?'var(--border-brand)':interactive&&h?'var(--border-strong)':'var(--border-default)'),
    boxShadow:selected?'0 0 0 1px var(--border-brand)':elevated?'var(--shadow-md)':interactive&&h?'var(--shadow-sm)':'var(--shadow-xs)',
    cursor:interactive?'pointer':undefined,transition:'border-color var(--duration-fast),box-shadow var(--duration-fast)',...style}}>{children}</div>;
}