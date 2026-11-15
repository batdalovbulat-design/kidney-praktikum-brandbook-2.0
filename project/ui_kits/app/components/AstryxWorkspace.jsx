const { useState: useAstryxWorkspaceState } = React;

function AstryxWorkspace({ variant = 'dual' }) {
  const programs = [
    { id: 'ultrasound', title: 'Ультразвуковая диагностика', type: 'Первичная переподготовка', duration: '576 академических часов', date: '24 июля', price: 'По запросу' },
    { id: 'vaccines', title: 'Вакцинопрофилактика', type: 'Двухнедельный курс', duration: '2 недели', date: '24 июля', price: '22 500 ₽' },
    { id: 'neurosonography', title: 'Нейросонография', type: 'Цикл лекций', duration: 'По программе цикла', date: '12 августа', price: '15 000 ₽' }
  ];
  const [selectedId, setSelectedId] = useAstryxWorkspaceState(programs[0].id);
  const [requests, setRequests] = useAstryxWorkspaceState([]);
  const [status, setStatus] = useAstryxWorkspaceState(null);
  const selected = programs.find(program => program.id === selectedId) || programs[0];

  const selectProgram = id => {
    setSelectedId(id);
    setStatus(null);
  };

  const saveRequest = text => {
    const next = { id: `${Date.now()}`, program: selected.title, text };
    setRequests(current => [...current, next]);
    setStatus({ tone: 'success', text: `Запрос по программе «${selected.title}» сохранён локально. Отправка в CRM не подключена.` });
  };

  const navigation = (
    <nav className="astryx-program-nav" aria-label="Программы практикума">
      <p className="astryx-panel-label">Программы</p>
      {programs.map(program => (
        <button
          key={program.id}
          className={`astryx-program-nav-item${selectedId === program.id ? ' is-selected' : ''}`}
          type="button"
          aria-pressed={selectedId === program.id}
          onClick={() => selectProgram(program.id)}
          data-od-id={`astryx-program-${program.id}`}
        >
          <span className="astryx-program-nav-type">{program.type}</span>
          <span className="astryx-program-nav-title">{program.title}</span>
        </button>
      ))}
    </nav>
  );

  const details = (
    <div className="astryx-program-details">
      <p className="eyebrow">{selected.type}</p>
      <h3 className="astryx-program-title" data-od-id="astryx-selected-title">{selected.title}</h3>
      <dl className="astryx-program-facts">
        <div><dt>Длительность</dt><dd>{selected.duration}</dd></div>
        <div><dt>Старт</dt><dd>{selected.date}</dd></div>
        <div><dt>Стоимость</dt><dd>{selected.price}</dd></div>
      </dl>
    </div>
  );

  const metadata = (
    <div className="astryx-metadata">
      <p className="astryx-panel-label">Документ</p>
      <p>Диплом установленного образца с регистрацией в ФИС ФРДО.</p>
      <p className="astryx-metadata-note">Даты и стоимость взяты из исходного демонстрационного макета.</p>
    </div>
  );

  const transcript = requests.length === 0 ? (
    <p className="astryx-empty-copy">Выберите программу и сохраните первый запрос куратору.</p>
  ) : (
    <ol className="astryx-request-list">
      {requests.map(request => (
        <li className="astryx-request" key={request.id}>
          <span className="astryx-request-program">{request.program}</span>
          <p>{request.text}</p>
        </li>
      ))}
    </ol>
  );

  const composer = (
    <AstryxComposer
      id="astryx-program-composer"
      placeholder={`Запрос по программе «${selected.title}»`}
      onSubmit={saveRequest}
      status={status}
      drawer={<p>Запрос сохраняется только в этом примере. Текст можно изменить до отправки в рабочую систему.</p>}
      header={<span className="astryx-composer-course">Куратор программы</span>}
      footer={<span className="astryx-composer-hint">Enter — сохранить · Shift+Enter — новая строка</span>}
    />
  );

  return (
    <AstryxTheme name="praktikum-workspace" mode="light">
      <div className="astryx-workspace-shell">
        <AstryxLayout
          id="astryx-workspace"
          density="balanced"
          header={<h2 className="section-heading" data-od-id="astryx-workspace-title">Рабочая область программы</h2>}
          start={navigation}
          content={(
            <AstryxChatLayout
              composer={composer}
              emptyState={<p className="astryx-empty-copy">Выберите программу и сохраните первый запрос куратору.</p>}
            >
              {details}
              {transcript}
            </AstryxChatLayout>
          )}
          end={variant === 'dual' ? metadata : null}
          footer={<span className="astryx-layout-footer-note">Astryx Layout + ChatLayout + Composer в токенах «Кидней.Практикум»</span>}
        />
      </div>
    </AstryxTheme>
  );
}

window.AstryxWorkspace = AstryxWorkspace;
