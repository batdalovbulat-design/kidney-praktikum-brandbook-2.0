function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Первичная переподготовка</p>
          <h1 className="hero-title" id="hero-title">Ультразвуковая диагностика</h1>
          <p className="hero-copy">576 академических часов. Оборудование экспертного класса. Диплом установленного образца с регистрацией в ФИС ФРДО.</p>
          <div className="hero-actions">
            <a className="button" href="#enroll">Подать заявку</a>
            <span className="hero-start">Старт цикла — 24 июля</span>
          </div>
        </div>
        <div className="hero-media" aria-label="576 академических часов, старт 24 июля">
          <div className="hero-circle">
            <span className="hero-number">576</span>
            <span className="hero-unit">академических часов</span>
          </div>
          <div className="date-oval">
            <span className="date-oval-label">Старт</span>
            <span>24 июля</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
