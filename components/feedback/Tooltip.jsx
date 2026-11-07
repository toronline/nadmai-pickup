import React from 'react';
export function Tooltip({label,children,placement='top',open}){
  const [h,setH]=React.useState(false);const show=open??h;
  const pos=placement==='bottom'?{top:'calc(100% + 6px)'}:{bottom:'calc(100% + 6px)'};
  return <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'inline-flex'}}>{children}
    {show&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,whiteSpace:'nowrap',padding:'6px 8px',borderRadius:'var(--radius-sm)',background:'var(--surface-inverse)',color:'var(--text-inverse)',font:'var(--type-caption)',boxShadow:'var(--shadow-md)',zIndex:60,pointerEvents:'none',animation:'nm-fade var(--duration-fast)'}}>{label}</span>}
  </span>;
}