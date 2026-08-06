/* global React */
function Hero() {
  return (
    <section style={{
      padding:'80px 64px 120px', background:'#fff', position:'relative', overflow:'hidden'
    }}>
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(circle at 20% 60%, rgba(243,156,18,.18), transparent 50%)',
        pointerEvents:'none'
      }}/>
      <div style={{position:'relative', maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:64, alignItems:'center'}}>
        <div>
          <div style={{fontSize:18, marginBottom:16, color:'#333'}}>Первичная переподготовка</div>
          <h1 style={{
            fontSize:96, fontWeight:900, lineHeight:0.95, letterSpacing:'-0.02em',
            textTransform:'uppercase', margin:0, color:'#000'
          }}>Ультразвуковая<br/>диагностика</h1>
          <p style={{fontSize:18, color:'#333', maxWidth:520, marginTop:24, lineHeight:1.5}}>
            576 академических часов. Оборудование экспертного класса. Диплом установленного образца с регистрацией в ФИС ФРДО.
          </p>
          <div style={{display:'flex', gap:16, marginTop:40, alignItems:'center'}}>
            <a href="#enroll" style={{
              background:'#000', color:'#fff', padding:'18px 36px',
              textDecoration:'none', fontWeight:700, textTransform:'uppercase', fontSize:15, letterSpacing:'0.04em'
            }}>Подать заявку</a>
            <span style={{fontSize:14, color:'#333'}}>Старт цикла — 24 июля</span>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', position:'relative'}}>
          <div style={{
            width:340, height:340, borderRadius:'50%', border:'1.5px solid #000',
            background:'linear-gradient(135deg,#d8d8d8,#9c9c9c)'
          }}/>
          <div style={{
            position:'absolute', bottom:-20, left:0,
            width:160, height:120, borderRadius:'50%',
            background:'#1E3A8A', color:'#fff', display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:22, lineHeight:1.1
          }}><span style={{fontSize:16, fontWeight:400}}>Старт</span>24 июля</div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
