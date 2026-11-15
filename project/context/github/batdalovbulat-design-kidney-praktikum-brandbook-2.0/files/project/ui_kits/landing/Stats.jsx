/* global React */
function Stats() {
  const items = [
    ['576', 'академических часов'],
    ['50+', 'мероприятий проведено'],
    ['2 000+', 'участников'],
    ['10', 'университетов-партнёров'],
  ];
  return (
    <section style={{padding:'64px', background:'#F5EFE6'}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32}}>
        {items.map(([n,l]) => (
          <div key={n} style={{borderTop:'1.5px solid #000', paddingTop:16}}>
            <div style={{fontSize:64, fontWeight:900, lineHeight:1, letterSpacing:'-0.02em'}}>{n}</div>
            <div style={{fontSize:13, marginTop:8, textTransform:'uppercase', color:'#333', letterSpacing:'0.02em'}}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Stats = Stats;
