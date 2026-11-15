function SiteHeader() {
  const links = [
    ['Курсы', '#programs'],
    ['Показатели', '#stats'],
    ['О нас', '#about']
  ];

  return (
    <header className="site-header">
      <a className="brand-home" href="#top" aria-label="Кидней.Практикум — к началу страницы">
        <img className="brand-logo" src="../../assets/logo/logo_main.svg" width="720" height="180" alt="Кидней Практикум" />
      </a>
      <nav className="site-nav" aria-label="Основная навигация">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="button header-cta" href="#enroll">Записаться</a>
    </header>
  );
}

window.SiteHeader = SiteHeader;
