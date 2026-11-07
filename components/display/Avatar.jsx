import React from 'react';
export function Avatar({name='',src,size=36,color='var(--teal-100)',ink='var(--teal-800)'}){
  const init=name.trim().split(/\s+/).map(s=>s[0]).slice(0,2).join('');
  return <span style={{flex:'none',width:size,height:size,borderRadius:'50%',overflow:'hidden',display:'inline-flex',alignItems:'center',justifyContent:'center',background:color,color:ink,font:'var(--weight-semibold) '+Math.round(size*0.38)+'px/1 var(--font-sans)'}}>
    {src?<img src={src} alt={name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>:init}</span>;
}