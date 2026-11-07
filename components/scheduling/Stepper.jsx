import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Stepper({steps=[],current=0}){
  return <ol style={{display:'flex',alignItems:'center',gap:8,listStyle:'none',margin:0,padding:0}}>
    {steps.map((s,i)=>{const done=i<current,on=i===current;
      return <React.Fragment key={i}><li style={{display:'flex',alignItems:'center',gap:8,flex:'none'}}>
        <span style={{width:24,height:24,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',font:'600 12px/1 var(--font-mono)',
          background:done||on?'var(--action-primary)':'var(--surface-sunken)',color:done||on?'#fff':'var(--text-subtle)',boxShadow:on?'0 0 0 4px var(--teal-100)':'none'}}>{done?<Icon name="check" size={14}/>:i+1}</span>
        <span style={{font:'var(--type-label)',color:on?'var(--text-strong)':done?'var(--text-body)':'var(--text-subtle)'}}>{s}</span></li>
        {i<steps.length-1&&<li aria-hidden style={{flex:1,minWidth:12,height:2,borderRadius:1,background:done?'var(--action-primary)':'var(--border-default)'}}/>}</React.Fragment>;})}
  </ol>;
}