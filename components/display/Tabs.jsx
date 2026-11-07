import React from 'react';
export function Tabs({items=[],value,defaultValue,onChange,variant='underline'}){
  const [inner,setInner]=React.useState(defaultValue??(items[0]&&(items[0].value??items[0])));const cur=value??inner;
  const seg=variant==='segmented';
  return <div role="tablist" style={{display:'inline-flex',gap:seg?2:20,padding:seg?3:0,background:seg?'var(--surface-sunken)':'transparent',borderRadius:seg?'var(--radius-md)':0,borderBottom:seg?0:'1px solid var(--border-default)'}}>
    {items.map(it=>{const v=typeof it==='string'?{value:it,label:it}:it;const on=v.value===cur;
      return <button key={v.value} role="tab" aria-selected={on} onClick={()=>{setInner(v.value);onChange&&onChange(v.value);}}
        style={seg?{height:30,padding:'0 14px',border:0,borderRadius:'var(--radius-sm)',cursor:'pointer',background:on?'var(--surface-card)':'transparent',boxShadow:on?'var(--shadow-xs)':'none',font:'var(--type-label)',color:on?'var(--text-strong)':'var(--text-muted)'}
        :{height:40,padding:0,border:0,background:'none',cursor:'pointer',marginBottom:-1,borderBottom:'2px solid '+(on?'var(--action-primary)':'transparent'),font:'var(--type-label)',color:on?'var(--text-strong)':'var(--text-muted)',display:'flex',alignItems:'center',gap:6}}>
        {v.label}{v.count!=null&&<span style={{font:'500 11px/1 var(--font-mono)',color:'var(--text-subtle)',background:'var(--surface-sunken)',padding:'3px 6px',borderRadius:10}}>{v.count}</span>}</button>;})}
  </div>;
}