function MessageBubble() {
  return (
    <aside className="credential-notice" aria-labelledby="credential-title">
      <div className="container credential-notice-grid">
        <h2 className="section-heading" id="credential-title">Документ по итогам</h2>
        <div>
          <p className="credential-lead">Диплом установленного образца с регистрацией в ФИС ФРДО.</p>
          <p className="credential-copy">Лицензия Минобрнауки РД № Л035-01227-05/00665847. Формулировка взята из исходного EnrollForm и SiteFooter.</p>
        </div>
      </div>
    </aside>
  );
}

window.MessageBubble = MessageBubble;
