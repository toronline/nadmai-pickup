import React from 'react';
export function Radio({name,options=[],value,defaultValue,onChange,direction='column'}){
  const [inner,setInner]=React.useState(defaultValue);const cur=value??inner;
  return <div role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?20:10}}>
    {options.map(o=>{const v=typeof o==='string'?{value:o,label:o}:o;const on=cur===v.value;
      return <label key={v.value} onClick={()=>{setInner(v.value);onChange&&onChange(v.value);}} style={{display:'flex',gap:10,alignItems:'flex-start',cursor:'pointer'}}>
        <span role="radio" aria-checked={on} style={{flex:'none',width:20,height:20,marginTop:1,borderRadius:'50%',border:'1.5px solid '+(on?'var(--action-primary)':'var(--border-strong)'),display:'flex',alignItems:'center',justifyContent:'center',background:'#fff'}}>
          {on&&<span style={{width:10,height:10,borderRadius:'50%',background:'var(--action-primary)'}}/>}</span>
        <span style={{display:'flex',flexDirection:'column',gap:2}}><span style={{font:'var(--type-body-sm)',color:'var(--text-strong)'}}>{v.label}</span>
        {v.description&&<span style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{v.description}</span>}</span>
      </label>;})}
  </div>;
}