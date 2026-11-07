<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(84px,1fr))",gap:8}}>
  {slots.map(t=><TimeSlot key={t} time={t} selected={t===pick} onClick={()=>setPick(t)} />)}
</div>
```jsx
- Group slots under "เช้า / บ่าย / เย็น" captions.
```
