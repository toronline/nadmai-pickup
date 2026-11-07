import React from 'react';
const BASE='https://unpkg.com/lucide-static@0.460.0/icons/';
export function Icon({name,size=20,color='currentColor',style,label}){
  const url='url('+BASE+name+'.svg)';
  return <span role={label?'img':undefined} aria-label={label} aria-hidden={label?undefined:true} style={{display:'inline-block',flex:'none',width:size,height:size,background:color,WebkitMask:url+' center/contain no-repeat',mask:url+' center/contain no-repeat',...style}}/>;
}