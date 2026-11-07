import React from 'react';
export function TimeSlot({time,selected,disabled,onClick,note}){
  const [h,setH]=React.useState(false);
  return <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} aria-pressed={selected}
    style={{height:44,minWidth:84,padding:'0 12px',borderRadius:'var(--radius-md)',cursor:disabled?'not-allowed':'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:1,
    background:selected?'var(--slot-selected)':disabled?'var(--slot-unavailable)':h?'var(--surface-brand-soft)':'var(--slot-available)',
    border:'1px solid '+(selected?'var(--slot-selected)':disabled?'transparent':h?'var(--teal-300)':'var(--border-default)'),
    color:selected?'#fff':disabled?'var(--text-disabled)':'var(--text-strong)',transition:'all var(--duration-fast) var(--ease-out)'}}>
    <span style={{font:'var(--type-time)',fontSize:15,textDecoration:disabled?'line-through':'none'}}>{time}</span>
    {note&&<span style={{font:'var(--type-caption)',fontSize:10,color:selected?'var(--teal-100)':'var(--marigold-600)'}}>{note}</span>}
  </button>;
}