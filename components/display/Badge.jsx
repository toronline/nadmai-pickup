import React from 'react';
const T={neutral:['var(--surface-sunken)','var(--text-muted)','var(--stone-400)'],brand:['var(--surface-brand-soft)','var(--text-brand)','var(--teal-500)'],success:['var(--status-success-soft)','var(--status-success-ink)','var(--status-success)'],warning:['var(--status-warning-soft)','var(--status-warning-ink)','var(--status-warning)'],danger:['var(--status-danger-soft)','var(--status-danger-ink)','var(--status-danger)'],info:['var(--status-info-soft)','var(--status-info-ink)','var(--status-info)'],accent:['var(--marigold-100)','var(--marigold-700)','var(--marigold-500)']};
export function Badge({tone='neutral',dot,children}){
  const [bg,fg,d]=T[tone];
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:22,padding:'0 8px',borderRadius:'var(--radius-full)',background:bg,color:fg,font:'var(--weight-medium) var(--text-xs)/1 var(--font-sans)',whiteSpace:'nowrap'}}>
    {dot&&<span style={{width:6,height:6,borderRadius:'50%',background:d}}/>}{children}</span>;
}