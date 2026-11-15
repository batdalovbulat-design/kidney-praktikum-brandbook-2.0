function AstryxLayout({ header, start, content, end, footer, density = 'balanced', id }) {
  return (
    <section className="astryx-layout" data-density={density} data-od-id={id}>
      {header && <header className="astryx-layout-header">{header}</header>}
      <div className={`astryx-layout-body${end ? ' astryx-layout-body--dual' : ''}`}>
        {start && <aside className="astryx-layout-panel astryx-layout-panel--start">{start}</aside>}
        <div className="astryx-layout-content">{content}</div>
        {end && <aside className="astryx-layout-panel astryx-layout-panel--end">{end}</aside>}
      </div>
      {footer && <footer className="astryx-layout-footer">{footer}</footer>}
    </section>
  );
}

window.AstryxLayout = AstryxLayout;
