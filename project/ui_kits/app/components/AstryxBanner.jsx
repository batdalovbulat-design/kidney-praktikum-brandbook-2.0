function AstryxBanner({ id = 'astryx-banner', title, children, tone = 'info', onDismiss }) {
  return (
    <section className={`astryx-banner astryx-banner--${tone}`} role={tone === 'error' ? 'alert' : 'status'} data-od-id={id}>
      <div className="astryx-banner-copy">
        <h3>{title}</h3>
        <div className="astryx-banner-body">{children}</div>
      </div>
      {onDismiss && <button className="astryx-text-button" type="button" onClick={onDismiss} data-od-id={`${id}-dismiss`}>Скрыть</button>}
    </section>
  );
}

window.AstryxBanner = AstryxBanner;
