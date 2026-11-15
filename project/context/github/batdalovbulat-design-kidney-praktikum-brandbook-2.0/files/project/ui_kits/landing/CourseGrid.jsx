/* global React */
function CourseCard({eyebrow, title, date, price, color='#fff'}) {
  const onOrange = color === '#F39C12';
  return (
    <article style={{
      background:color, padding:32, position:'relative', overflow:'hidden',
      border: color==='#fff' ? '1px solid rgba(0,0,0,.08)' : 'none',
      minHeight:360, display:'flex', flexDirection:'column', justifyContent:'space-between'
    }}>
      <div>
        <div style={{fontSize:14, color: onOrange?'#000':'#333', marginBottom:12}}>{eyebrow}</div>
        <h3 style={{fontSize:36, fontWeight:700, lineHeight:1.05, textTransform:'uppercase', margin:0}}>{title}</h3>
      </div>
      <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:32}}>
        <div>
          <div style={{fontSize:12, textTransform:'uppercase', color:'#333', letterSpacing:'0.04em'}}>Старт</div>
          <div style={{fontSize:24, fontWeight:700}}>{date}</div>
        </div>
        {price && <div style={{
          background:'#1E3A8A', color:'#fff', padding:'10px 20px',
          borderRadius:999, fontWeight:700, fontSize:15
        }}>{price}</div>}
      </div>
    </article>
  );
}

function CourseGrid() {
  return (
    <section style={{padding:'80px 64px', background:'#fff'}}>
      <div style={{maxWidth:1200, margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:48}}>
          <h2 style={{fontSize:48, fontWeight:700, textTransform:'uppercase', margin:0, letterSpacing:'-0.01em'}}>Программы</h2>
          <a href="#" style={{fontSize:14, color:'#000', textDecoration:'none', display:'flex', alignItems:'center', gap:8}}>
            Все курсы
            <svg width="32" height="10" viewBox="0 0 32 10"><line x1="0" y1="5" x2="26" y2="5" stroke="#000" strokeWidth="1.5"/><polyline points="22,1 26,5 22,9" fill="none" stroke="#000" strokeWidth="1.5"/></svg>
          </a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
          <CourseCard eyebrow="Двухнедельный курс" title="Вакцинопрофилактика" date="24 июля" price="22 500 ₽" color="#F5EFE6"/>
          <CourseCard eyebrow="Цикл лекций" title="Нейросонография" date="12 августа" price="15 000 ₽" color="#F39C12"/>
          <CourseCard eyebrow="Конференция" title="Почка и инфекция" date="26—27 августа" price="бесплатно" color="#fff"/>
        </div>
      </div>
    </section>
  );
}
window.CourseCard = CourseCard;
window.CourseGrid = CourseGrid;
