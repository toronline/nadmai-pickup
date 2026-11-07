import React from 'react';
import { Icon } from './Icon.jsx';
const SIZES={sm:{h:'var(--control-sm)',px:12,fs:'var(--text-sm)',ic:16},md:{h:'var(--control-md)',px:16,fs:'var(--text-sm)',ic:18},lg:{h:'var(--control-lg)',px:22,fs:'var(--text-md)',ic:20}};
const V={
  primary:{bg:'var(--action-primary)',hv:'var(--action-primary-hover)',pr:'var(--action-primary-press)',fg:'var(--text-on-brand)',bd:'transparent'},
  secondary:{bg:'var(--action-secondary)',hv:'var(--action-secondary-hover)',pr:'var(--stone-100)',fg:'var(--text-strong)',bd:'var(--border-default)'},
  ghost:{bg:'transparent',hv:'var(--action-ghost-hover)',pr:'var(--stone-200)',fg:'var(--text-body)',bd:'transparent'},
  danger:{bg:'var(--action-danger)',hv:'var(--action-danger-hover)',pr:'var(--red-700)',fg:'#fff',bd:'transparent'},
  soft:{bg:'var(--surface-brand-soft)',hv:'var(--teal-100)',pr:'var(--teal-200)',fg:'var(--text-brand)',bd:'transparent'}};
export function Button({variant='primary',size='md',iconLeft,iconRight,fullWidth,disabled,loading,children,onClick,type='button',style}){
  const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);
  const s=SIZES[size],v=V[variant];const off=disabled||loading;
  const bg=off?(variant==='ghost'?'transparent':'var(--stone-100)'):p?v.pr:h?v.hv:v.bg;
  return <button type={type} disabled={off} onClick={onClick}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:8,height:s.h,padding:'0 '+s.px+'px',
      font:'var(--weight-medium) '+s.fs+'/1 var(--font-sans)',color:off?'var(--text-disabled)':v.fg,background:bg,border:'1px solid '+(off?'transparent':v.bd),
      borderRadius:'var(--radius-md)',cursor:off?'not-allowed':'pointer',transition:'background var(--duration-fast) var(--ease-out), transform var(--duration-fast)',
      transform:p&&!off?'scale(.98)':'none',boxShadow:variant==='secondary'&&!off?'var(--shadow-xs)':'none',whiteSpace:'nowrap',...style}}>
    {loading?<Icon name="loader-circle" size={s.ic} style={{animation:'nm-spin 0.9s linear infinite'}}/>:iconLeft&&<Icon name={iconLeft} size={s.ic}/>}
    {children}
    {iconRight&&<Icon name={iconRight} size={s.ic}/>}
    <style>{'@keyframes nm-spin{to{transform:rotate(360deg)}}'}</style>
  </button>;
}