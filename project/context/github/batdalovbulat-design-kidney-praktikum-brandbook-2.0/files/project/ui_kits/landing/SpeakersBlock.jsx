/* global React */
function SpeakerTile({name, role, inst, photo}) {
  return (
    <article style={{padding:24, background:'#fff'}}>
      <div style={{
        width:'100%', aspectRatio:'4/5', borderRadius:'50%',
        border:'1.5px solid #000', background: photo || 'linear-gradient(135deg,#d6d6d6,#a0a0a0)',
        backgroundSize:'cover', backgroundPosition:'center', marginBottom:20
      }}/>
      <div style={{fontSize:12, color:'#333', display:'flex', alignItems:'center', gap:8, marginBottom:6}}>
        спикер
        <svg width="36" height="8" viewBox="0 0 36 8"><line x1="0" y1="4" x2="30" y2="4" stroke="#000" strokeWidth="1.2"/><polyline points="26,1 30,4 26,7" fill="none" stroke="#000" strokeWidth="1.2"/></svg>
      </div>
      <div style={{fontSize:22, fontWeight:700, textTransform:'uppercase', lineHeight:1.05}}>{name}</div>
      <div style={{fontSize:13, color:'#333', marginTop:8, lineHeight:1.4}}>{role}<br/>{inst}</div>
    </article>
  );
}

function SpeakersBlock() {
  const data = [
    {name:'Пыков\nМихаил Иванович', role:'Профессор, д.м.н.', inst:'РМАНПО · автор учебника по детской УЗД'},
    {name:'Ольхова\nЕлена Борисовна', role:'Профессор, д.м.н.', inst:'МГМСУ им. А.И. Евдокимова'},
    {name:'Овсянников\nДмитрий Юрьевич', role:'Педиатр, пульмонолог, д.м.н.', inst:'РУДН'},
    {name:'Зайкова\nНаталья', role:'Нефролог', inst:'РНИМУ им. Н.И. Пирогова'},
  ];
  return (
    <section style={{padding:'80px 64px', background:'#F5EFE6'}}>
      <div style={{maxWidth:1200, margin:'0 auto'}}>
        <h2 style={{fontSize:48, fontWeight:700, textTransform:'uppercase', margin:'0 0 48px', letterSpacing:'-0.01em'}}>Спикеры</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, background:'#000', border:'1px solid #000'}}>
          {data.map((s,i) => <SpeakerTile key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
window.SpeakersBlock = SpeakersBlock;
