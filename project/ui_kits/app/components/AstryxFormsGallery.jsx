function AstryxFormsGallery() {
  const [program, setProgram] = React.useState('Вакцинопрофилактика');
  const [specialty, setSpecialty] = React.useState('Педиатр');
  const [format, setFormat] = React.useState('Онлайн');

  return (
    <section className="astryx-forms-gallery" data-od-id="astryx-forms-gallery">
      <div className="container">
        <div className="section-topline">
          <div>
            <h2 className="section-heading">Формы и оверлеи</h2>
            <p className="section-note">Dialog, Popover, Dropdown, Selector, Segmented Control и Banner в рабочем сценарии записи.</p>
          </div>
        </div>
        <AstryxBanner id="enrollment-banner" title="Запись открыта" tone="info">Выберите программу, формат и специализацию. Юридические сведения доступны через диалог.</AstryxBanner>
        <div className="astryx-forms-grid">
          <div className="astryx-form-demo" id="dialog-demo">
            <h3>Dialog</h3>
            <AstryxDialog id="license-dialog" triggerLabel="Показать лицензию" title="Лицензия и документ">
              <p>Лицензия Минобрнауки РД № Л035-01227-05/00665847.</p>
              <p>Диплом установленного образца с регистрацией в ФИС ФРДО.</p>
            </AstryxDialog>
          </div>
          <div className="astryx-form-demo" id="popover-demo">
            <h3>Popover</h3>
            <AstryxPopover id="course-popover" triggerLabel="Что входит в курс" title="Состав программы">
              <p>Теория, практика и указание образовательного результата. Точный состав зависит от выбранной программы.</p>
            </AstryxPopover>
          </div>
          <div className="astryx-form-demo" id="dropdown-demo">
            <AstryxDropdown id="program-dropdown" label="Программа" options={['Ультразвуковая диагностика', 'Вакцинопрофилактика', 'Нейросонография', 'Почка и инфекция']} value={program} onChange={setProgram} />
          </div>
          <div className="astryx-form-demo" id="selector-demo">
            <AstryxSelector id="specialty-selector" label="Специализация" options={['Педиатр', 'УЗД-врач', 'Вакцинолог', 'Другое']} value={specialty} onChange={setSpecialty} helper="Используется для подбора программы." required />
          </div>
          <div className="astryx-form-demo" id="segmented-demo">
            <AstryxSegmentedControl id="format-segmented" label="Формат участия" options={['Онлайн', 'Очно']} value={format} onChange={setFormat} />
          </div>
          <div className="astryx-form-demo astryx-form-demo--summary" id="banner-demo">
            <h3>Текущий выбор</h3>
            <p>{program} · {specialty} · {format}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AstryxFormsGallery = AstryxFormsGallery;
