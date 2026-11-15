function AstryxDataViews() {
  const [view, setView] = React.useState('Расписание');
  const [selectedProgram, setSelectedProgram] = React.useState('vaccines');

  const scheduleRows = [
    { id: 'uzd', date: '24 июля', course: 'Ультразвуковая диагностика', format: 'Переподготовка', price: 'По запросу' },
    { id: 'vaccines', date: '24 июля', course: 'Вакцинопрофилактика', format: '2 недели', price: '22 500 ₽' },
    { id: 'neuro', date: '12 августа', course: 'Нейросонография', format: 'Цикл лекций', price: '15 000 ₽' },
    { id: 'conference', date: '26–27 августа', course: 'Почка и инфекция', format: 'Конференция', price: 'Бесплатно' }
  ];

  const speakerRows = [
    { id: 'pykov', speaker: 'Пыков Михаил Иванович', role: 'Профессор, д.м.н.', organization: 'РМАНПО' },
    { id: 'olhova', speaker: 'Ольхова Елена Борисовна', role: 'Профессор, д.м.н.', organization: 'МГМСУ им. А.И. Евдокимова' },
    { id: 'ovsyannikov', speaker: 'Овсянников Дмитрий Юрьевич', role: 'Педиатр, пульмонолог, д.м.н.', organization: 'РУДН' },
    { id: 'zaikova', speaker: 'Зайкова Наталья', role: 'Нефролог', organization: 'РНИМУ им. Н.И. Пирогова' }
  ];

  const programs = [
    { id: 'uzd', title: 'Ультразвуковая диагностика', meta: '576 часов', description: 'Первичная переподготовка' },
    { id: 'vaccines', title: 'Вакцинопрофилактика', meta: '24 июля · 22 500 ₽', description: 'Двухнедельный курс' },
    { id: 'neuro', title: 'Нейросонография', meta: '12 августа · 15 000 ₽', description: 'Цикл лекций' },
    { id: 'conference', title: 'Почка и инфекция', meta: '26–27 августа · бесплатно', description: 'Конференция' }
  ];

  return (
    <section className="astryx-data-views" data-od-id="astryx-data-views">
      <div className="container">
        <div className="section-topline">
          <h2 className="section-heading">Данные программ</h2>
          <AstryxSegmentedControl id="data-view-mode" label="Представление" options={['Расписание', 'Спикеры', 'Программы']} value={view} onChange={setView} />
        </div>
        {view === 'Расписание' && (
          <AstryxTable
            id="schedule-table"
            caption="Даты, формат и стоимость программ"
            columns={[{ key: 'date', label: 'Дата', sortable: true }, { key: 'course', label: 'Программа', sortable: true }, { key: 'format', label: 'Формат', sortable: true }, { key: 'price', label: 'Стоимость', sortable: true }]}
            rows={scheduleRows}
          />
        )}
        {view === 'Спикеры' && (
          <AstryxTable
            id="speakers-table"
            caption="Спикеры и точные регалии"
            columns={[{ key: 'speaker', label: 'Спикер', sortable: true }, { key: 'role', label: 'Регалии', sortable: true }, { key: 'organization', label: 'Организация', sortable: true }]}
            rows={speakerRows}
          />
        )}
        {view === 'Программы' && <AstryxList id="programs-list" label="Выбор программы" items={programs} selectedId={selectedProgram} onSelect={item => setSelectedProgram(item.id)} />}
        <p className="section-note">Даты, цены и состав взяты из исходного демонстрационного макета. Перед публикацией подтвердите актуальные данные.</p>
      </div>
    </section>
  );
}

window.AstryxDataViews = AstryxDataViews;
