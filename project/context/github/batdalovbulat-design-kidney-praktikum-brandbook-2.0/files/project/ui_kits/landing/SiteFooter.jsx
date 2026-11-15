/* global React */
function SiteFooter() {
  return (
    <footer style={{padding:'48px 64px', background:'#fff', borderTop:'1px solid rgba(0,0,0,.08)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:48}}>
        <div>
          <img src="../../assets/logo/logo_main.svg" style={{height:36}} alt="Кидней Практикум"/>
          <p style={{fontSize:13, color:'#777', marginTop:16, lineHeight:1.5, maxWidth:280}}>
            Образовательная организация при детской клинике Кидней. Махачкала, Дагестан.
          </p>
        </div>
        <div>
          <div style={{fontSize:11, color:'#777', textTransform:'uppercase', fontWeight:700, marginBottom:12}}>Программы</div>
          {['УЗД','Вакцинопрофилактика','Конференция','Родителям'].map(x=>(
            <a key={x} href="#" style={{display:'block', fontSize:14, color:'#000', textDecoration:'none', padding:'4px 0'}}>{x}</a>
          ))}
        </div>
        <div>
          <div style={{fontSize:11, color:'#777', textTransform:'uppercase', fontWeight:700, marginBottom:12}}>Контакты</div>
          <div style={{fontSize:14, lineHeight:1.7}}>
            8 (8722) 55-77-27<br/>
            @kidney.practicum<br/>
            г. Махачкала
          </div>
        </div>
        <div>
          <div style={{fontSize:11, color:'#777', textTransform:'uppercase', fontWeight:700, marginBottom:12}}>Лицензия</div>
          <div style={{fontSize:11, color:'#777', lineHeight:1.6}}>
            Минобрнауки РД<br/>№ Л035-01227-05/00665847<br/>Диплом — ФИС ФРДО
          </div>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
