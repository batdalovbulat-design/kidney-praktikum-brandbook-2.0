function SiteFooter() {
  return (
    <footer className="site-footer" id="about">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="../../assets/logo/logo_main.svg" width="720" height="180" alt="Кидней Практикум" />
          <p className="footer-copy">Образовательная организация при детской клинике Кидней. Махачкала, Дагестан.</p>
        </div>
        <div>
          <h2 className="footer-heading">Программы</h2>
          <div className="footer-list">
            <a className="footer-link" href="#top">УЗД</a>
            <a className="footer-link" href="#programs">Вакцинопрофилактика</a>
            <a className="footer-link" href="#programs">Конференция</a>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Контакты</h2>
          <p className="footer-text"><a className="footer-link" href="tel:88722557727">8 (8722) 55-77-27</a><br />@kidney.practicum<br />г. Махачкала</p>
        </div>
        <div>
          <h2 className="footer-heading">Лицензия</h2>
          <p className="footer-text">Минобрнауки РД<br />№ Л035-01227-05/00665847<br />Диплом — ФИС ФРДО</p>
        </div>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
