/* global React */
const { useState } = React;

function SiteHeader() {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'24px 64px', borderBottom:'1px solid rgba(0,0,0,.08)',
      background:'#fff', position:'sticky', top:0, zIndex:10
    }}>
      <a href="#" style={{display:'flex', alignItems:'center', gap:14, textDecoration:'none', color:'#000'}}>
        <img src="../../assets/logo/logo_main.svg" style={{height:32}} alt="Кидней Практикум"/>
      </a>
      <nav style={{display:'flex', gap:40, fontSize:15, fontWeight:500}}>
        {['Курсы','Спикеры','Конференция','О нас'].map(x=>(
          <a key={x} href="#" style={{color:'#000', textDecoration:'none'}}>{x}</a>
        ))}
      </nav>
      <a href="#enroll" style={{
        background:'#000', color:'#fff', padding:'12px 24px',
        textDecoration:'none', fontWeight:700, textTransform:'uppercase', fontSize:14, letterSpacing:'0.04em'
      }}>Записаться</a>
    </header>
  );
}
window.SiteHeader = SiteHeader;
