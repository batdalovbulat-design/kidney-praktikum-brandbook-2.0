function AstryxPatternLibrary() {
  const patterns = [
    { id: 'dialog', name: 'Dialog', category: 'Overlay', description: 'Модальная лицензия и подтверждение действий.', href: 'preview/astryx-forms.html#dialog-demo' },
    { id: 'popover', name: 'Popover', category: 'Overlay', description: 'Контекст программы без ухода со страницы.', href: 'preview/astryx-forms.html#popover-demo' },
    { id: 'dropdown', name: 'Dropdown Menu', category: 'Form Controls', description: 'Выбор программы с клавиатурной навигацией.', href: 'preview/astryx-forms.html#dropdown-demo' },
    { id: 'selector', name: 'Selector', category: 'Form Controls', description: 'Подписанный select с helper и ошибкой.', href: 'preview/astryx-forms.html#selector-demo' },
    { id: 'segmented', name: 'Segmented Control', category: 'Form Controls', description: 'Формат и режимы с roving tabindex.', href: 'preview/astryx-forms.html#segmented-demo' },
    { id: 'banner', name: 'Banner', category: 'Feedback & Status', description: 'Текстовый статус без зависимости от цвета.', href: 'preview/astryx-forms.html#banner-demo' },
    { id: 'table', name: 'Table', category: 'Table & List', description: 'Сортируемые расписания и каталог спикеров.', href: 'preview/astryx-data.html#schedule-table' },
    { id: 'list', name: 'List', category: 'Table & List', description: 'Выбор программы с полным описанием.', href: 'preview/astryx-data.html#programs-list' },
    { id: 'layout', name: 'Layout', category: 'Layout', description: 'Header, панели, content и sticky composer.', href: 'preview/astryx-layouts.html' },
    { id: 'theme', name: 'Theme', category: 'Layout', description: 'Scoped light/dark без изменения root.', href: 'preview/astryx-theme.html' },
    { id: 'composer', name: 'Chat Composer', category: 'Chat', description: 'Draft, disclosure, Enter и локальный статус.', href: 'preview/astryx-composer.html' },
    { id: 'density', name: 'Density Presets', category: 'Utility', description: 'Четыре ритма без потери доступности.', href: 'preview/astryx-presets.html' }
  ];
  const previewBase = window.location.pathname.includes('/preview/') ? '' : '../../';
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('Все категории');
  const categories = ['Все категории', ...new Set(patterns.map(pattern => pattern.category))];
  const normalized = query.trim().toLocaleLowerCase('ru');
  const filtered = patterns.filter(pattern => {
    const matchesCategory = category === 'Все категории' || pattern.category === category;
    const matchesQuery = !normalized || `${pattern.name} ${pattern.category} ${pattern.description}`.toLocaleLowerCase('ru').includes(normalized);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="astryx-pattern-library" data-od-id="astryx-pattern-library">
      <div className="section-topline">
        <div>
          <h2 className="section-heading">Библиотека паттернов</h2>
          <p className="section-note">Поиск по рабочим модулям пакета и переход к интерактивным примерам.</p>
        </div>
        <span className="astryx-library-count">{filtered.length} из {patterns.length}</span>
      </div>
      <div className="astryx-library-toolbar">
        <div className="astryx-search">
          <label className="astryx-control-label" htmlFor="pattern-search">Поиск паттерна</label>
          <input className="astryx-search-input" id="pattern-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Например: Dialog" data-od-id="pattern-search" />
        </div>
        <AstryxSelector id="pattern-category" label="Категория" options={categories} value={category} onChange={setCategory} />
      </div>
      {filtered.length === 0 ? (
        <div className="astryx-library-empty">
          <p>По запросу ничего не найдено.</p>
          <button className="demo-button demo-button--secondary" type="button" onClick={() => { setQuery(''); setCategory('Все категории'); }}>Сбросить фильтры</button>
        </div>
      ) : (
        <div className="astryx-pattern-grid">
          {filtered.map(pattern => (
            <a className="astryx-pattern-card" href={`${previewBase}${pattern.href}`} key={pattern.id} data-od-id={`pattern-card-${pattern.id}`}>
              <span className="astryx-pattern-category">{pattern.category}</span>
              <strong className="astryx-pattern-name">{pattern.name}</strong>
              <span className="astryx-pattern-description">{pattern.description}</span>
              <span className="astryx-pattern-link">Открыть пример</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

window.AstryxPatternLibrary = AstryxPatternLibrary;
