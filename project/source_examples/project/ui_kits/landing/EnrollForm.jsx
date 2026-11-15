/* global React */
const { useState: useEnrollState } = React;

function EnrollForm() {
  const [step, setStep] = useEnrollState(0);
  const [name, setName] = useEnrollState('');
  const [phone, setPhone] = useEnrollState('');
  const [spec, setSpec] = useEnrollState('Педиатр');

  if (step === 1) {
    return (
      <section id="enroll" style={{padding:'96px 64px', background:'#000', color:'#fff'}}>
        <div style={{maxWidth:760, margin:'0 auto', textAlign:'left'}}>
          <div style={{fontSize:14, color:'#F39C12', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.04em'}}>Заявка отправлена</div>
          <h2 style={{fontSize:64, fontWeight:900, textTransform:'uppercase', lineHeight:1, letterSpacing:'-0.02em', margin:0}}>Мы свяжемся<br/>с вами{' '}<span style={{color:'#F39C12'}}>в течение дня</span></h2>
          <p style={{fontSize:18, marginTop:24, color:'#ccc', lineHeight:1.5}}>Спасибо, {name.split(' ')[0] || 'коллега'}. Куратор курса позвонит на номер {phone || '+7'} и пришлёт программу.</p>
          <button onClick={()=>setStep(0)} style={{marginTop:32, background:'transparent', border:'1.5px solid #fff', color:'#fff', padding:'14px 28px', fontWeight:700, fontSize:14, textTransform:'uppercase', letterSpacing:'0.04em', cursor:'pointer'}}>Подать ещё одну</button>
        </div>
      </section>
    );
  }

  return (
    <section id="enroll" style={{padding:'96px 64px', background:'#000', color:'#fff'}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start'}}>
        <div>
          <div style={{fontSize:14, color:'#F39C12', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.04em'}}>Записаться</div>
          <h2 style={{fontSize:72, fontWeight:900, textTransform:'uppercase', lineHeight:0.95, letterSpacing:'-0.02em', margin:0}}>Подайте<br/>заявку</h2>
          <p style={{fontSize:16, color:'#bbb', marginTop:24, lineHeight:1.5, maxWidth:400}}>
            Куратор перезвонит, пришлёт программу и реквизиты. Без давления и навязывания.
          </p>
          <p style={{fontSize:11, color:'#777', marginTop:32, lineHeight:1.5, maxWidth:400}}>
            Лицензия Минобрнауки РД № Л035-01227-05/00665847. Диплом установленного образца с регистрацией в ФИС ФРДО.
          </p>
        </div>
        <form onSubmit={e=>{e.preventDefault(); setStep(1);}} style={{display:'grid', gap:24}}>
          {[['ФИО','name','Магомедова Мадина Гусейновна', name, setName],['Телефон','tel','+7 ___ ___ __ __', phone, setPhone]].map(([lbl,t,ph,v,set]) => (
            <label key={lbl} style={{display:'block'}}>
              <div style={{fontSize:11, color:'#777', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:700, marginBottom:8}}>{lbl}</div>
              <input type={t} placeholder={ph} value={v} onChange={e=>set(e.target.value)} style={{
                width:'100%', background:'transparent', border:0, borderBottom:'1.5px solid #fff',
                color:'#fff', fontFamily:'inherit', fontSize:18, padding:'10px 0', outline:'none'
              }}/>
            </label>
          ))}
          <label style={{display:'block'}}>
            <div style={{fontSize:11, color:'#777', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:700, marginBottom:8}}>Специализация</div>
            <select value={spec} onChange={e=>setSpec(e.target.value)} style={{
              width:'100%', background:'transparent', border:0, borderBottom:'1.5px solid #fff',
              color:'#fff', fontFamily:'inherit', fontSize:18, padding:'10px 0', outline:'none'
            }}>
              {['Педиатр','УЗД-врач','Вакцинолог','Другое'].map(o=><option key={o} style={{color:'#000'}}>{o}</option>)}
            </select>
          </label>
          <button type="submit" style={{
            background:'#F39C12', color:'#000', border:0, padding:'18px 36px',
            fontWeight:700, textTransform:'uppercase', fontSize:15, letterSpacing:'0.04em', cursor:'pointer', justifySelf:'start', marginTop:8
          }}>Отправить заявку</button>
        </form>
      </div>
    </section>
  );
}
window.EnrollForm = EnrollForm;
