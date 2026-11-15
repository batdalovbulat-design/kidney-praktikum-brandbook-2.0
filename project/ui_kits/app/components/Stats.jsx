function Stats() {
  const items = [
    ['576', 'академических часов'],
    ['50+', 'мероприятий проведено'],
    ['2 000+', 'участников'],
    ['10', 'университетов-партнёров']
  ];

  return (
    <section className="section stats-section" id="stats" aria-labelledby="stats-title">
      <div className="container">
        <div className="section-topline">
          <h2 className="section-heading" id="stats-title">О практикуме</h2>
        </div>
        <div className="stats-grid">
          {items.map(([number, label]) => (
            <div className="stat" key={label}>
              <span className="stat-number">{number}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
        <p className="section-note">Значения взяты из исходного UI-макета и не считаются подтверждёнными текущими показателями.</p>
      </div>
    </section>
  );
}

window.Stats = Stats;
