import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
const TH_MONTHS=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
const TH_DOW=['อา','จ','อ','พ','พฤ','ศ','ส'];
const iso=(y,m,d)=>y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
export function MiniCalendar({month,value,onChange,today,closedWeekdays=[],minDate,markedDates=[]}){
  const init=(month||value||today||new Date().toISOString().slice(0,10)).slice(0,7);
  const [ym,setYm]=React.useState(init);
  const [y,m]=ym.split('-').map(Number);const mi=m-1;
  const first=new Date(y,mi,1).getDay();const days=new Date(y,mi+1,0).getDate();
  const shift=d=>{const t=new Date(y,mi+d,1);setYm(t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0'));};
  const cells=[];for(let i=0;i<first;i++)cells.push(null);for(let d=1;d<=days;d++)cells.push(d);
  return <div style={{width:'100%',minWidth:260}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
      <div style={{font:'var(--type-title)',color:'var(--text-strong)'}}>{TH_MONTHS[mi]} {y+543}</div>
      <div style={{display:'flex',gap:4}}><IconButton icon="chevron-left" label="เดือนก่อน" size="sm" onClick={()=>shift(-1)}/><IconButton icon="chevron-right" label="เดือนถัดไป" size="sm" onClick={()=>shift(1)}/></div></div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:2}}>
      {TH_DOW.map(d=><div key={d} style={{textAlign:'center',font:'var(--type-caption)',color:'var(--text-subtle)',padding:'6px 0'}}>{d}</div>)}
      {cells.map((d,i)=>{if(!d)return <div key={i}/>;const k=iso(y,mi,d);const dow=(first+d-1)%7;
        const off=closedWeekdays.includes(dow)||(minDate&&k<minDate);const sel=k===value;const isT=k===today;const mark=markedDates.includes(k);
        return <button key={i} disabled={off} onClick={()=>onChange&&onChange(k)} style={{position:'relative',height:40,border:0,borderRadius:'var(--radius-md)',cursor:off?'default':'pointer',
          background:sel?'var(--slot-selected)':'transparent',color:sel?'#fff':off?'var(--text-disabled)':'var(--text-strong)',
          font:(sel||isT?'600 ':'400 ')+'var(--text-sm)/1 var(--font-sans)',textDecoration:off&&!sel?'line-through':'none',textDecorationColor:'var(--stone-300)',transition:'background var(--duration-fast)'}}
          onMouseEnter={e=>{if(!sel&&!off)e.currentTarget.style.background='var(--surface-brand-soft)';}} onMouseLeave={e=>{if(!sel)e.currentTarget.style.background='transparent';}}>
          {d}{(isT||mark)&&<span style={{position:'absolute',left:'50%',bottom:5,transform:'translateX(-50%)',width:4,height:4,borderRadius:'50%',background:sel?'#fff':isT?'var(--today)':'var(--teal-400)'}}/>}</button>;})}
    </div></div>;
}