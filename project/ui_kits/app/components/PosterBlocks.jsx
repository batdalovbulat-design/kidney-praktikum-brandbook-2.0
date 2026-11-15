(() => {
  function Lenses() {
    return (
      <svg viewBox="0 0 220 170" className="poster-block-svg" aria-hidden="true">
        <circle cx="86" cy="78" r="42" fill="none" stroke="#000000" strokeWidth="3" />
        <circle cx="120" cy="83" r="30" fill="none" stroke="#000000" strokeWidth="3" />
        <circle cx="102" cy="108" r="26" fill="none" stroke="#000000" strokeWidth="3" />
        <circle cx="136" cy="111" r="36" fill="none" stroke="#000000" strokeWidth="3" />
      </svg>
    );
  }

  function Hairlines() {
    return (
      <svg viewBox="0 0 260 170" className="poster-block-svg" aria-hidden="true">
        <line x1="-10" y1="132" x2="270" y2="-40" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="-10" y1="-6" x2="270" y2="166" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="146" y1="-10" x2="262" y2="130" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      </svg>
    );
  }

  function Arrow() {
    return (
      <svg viewBox="0 0 160 16" className="poster-block-arrow" aria-hidden="true">
        <line x1="0" y1="8" x2="146" y2="8" stroke="#000000" strokeWidth="1.5" />
        <polyline points="138,2 148,8 138,14" fill="none" stroke="#000000" strokeWidth="1.5" />
      </svg>
    );
  }

  function PosterBlocks({ logoPath }) {
    const blocks = [
      {
        id: 'logo',
        name: 'Лок-ап логотипа',
        surface: 'cream',
        use: 'Подпись серии и финальный блок.',
        limit: 'Только исходный SVG, без перерисовки и набора текстом.',
        specimen: <img src={logoPath} alt="Логотип Кидней.Практикум" className="poster-block-logo" />
      },
      {
        id: 'lenses',
        name: 'Четыре линзы',
        surface: 'cream',
        use: 'Графический мотив постерной серии.',
        limit: 'Только обводка, чёрный контур, без заливки и тени.',
        specimen: <Lenses />
      },
      {
        id: 'hairlines',
        name: 'Диагональные линии',
        surface: 'blue',
        use: 'Дробят пустое поле и держат направление.',
        limit: 'Белые, 35% прозрачности, 60° и 120°, не больше трёх.',
        specimen: <Hairlines />
      },
      {
        id: 'headline',
        name: 'Блок заголовка',
        surface: 'blue',
        use: 'Главный смысл на чёрной плашке.',
        limit: 'Onest 700–900, sentence case, не больше четырёх строк.',
        specimen: (
          <div className="poster-block-headline">
            <span>Нейросонография:</span>
            <span>протокол и нормы</span>
          </div>
        )
      },
      {
        id: 'date',
        name: 'Овал даты',
        surface: 'blue',
        use: 'Дата и время в одном касании.',
        limit: 'Дата не переносится, овал не сжимается меньше текста.',
        specimen: <span className="poster-block-oval">12 августа · 10:00</span>
      },
      {
        id: 'price',
        name: 'Овал цены',
        surface: 'white',
        use: 'Цена в интерфейсе и на светлых полях.',
        limit: 'В постерной серии цена крупная и белая, без овала.',
        specimen: <span className="poster-block-price-oval">15 000 ₽</span>
      },
      {
        id: 'pill',
        name: 'Pill формата',
        surface: 'blue',
        use: 'Онлайн или офлайн одним словом.',
        limit: 'Кремовая плашка, чёрный текст, верхний регистр с трекингом.',
        specimen: <span className="poster-block-pill">Онлайн</span>
      },
      {
        id: 'vertical',
        name: 'Вертикальный заголовок',
        surface: 'black',
        use: 'Высокий формат 9:16 и плакат 70×140.',
        limit: 'Строки вручную, без переносов внутри слова.',
        specimen: (
          <div className="poster-block-vertical">
            <span>УЗИ</span>
            <span>в педиатрии</span>
            <span>2026</span>
          </div>
        )
      },
      {
        id: 'arrow',
        name: 'Тонкая стрелка',
        surface: 'cream',
        use: 'Разделитель и направление к действию.',
        limit: '1,5 px, прямой наконечник, без иконок рядом.',
        specimen: <Arrow />
      },
      {
        id: 'credentials',
        name: 'Регалии лектора',
        surface: 'blue',
        use: 'Имя и точные регалии без сокращений.',
        limit: 'Имя 700, регалии 400, обе строки читаемы.',
        specimen: (
          <div className="poster-block-speaker">
            <span className="poster-block-speaker__name">Пыков Михаил Иванович</span>
            <span className="poster-block-speaker__creds">Профессор, д.м.н. · РМАНПО</span>
          </div>
        )
      }
    ];

    return (
      <div className="poster-blocks" id="poster-blocks">
        <div className="poster-blocks__head">
          <h3>Библиотека постерных блоков</h3>
          <p>Один набор элементов для серии. Каждый блок собран на фирменных токенах и не имитирует веб-карточку.</p>
        </div>
        <div className="poster-blocks__grid">
          {blocks.map(block => (
            <article className="poster-block-card" key={block.id}>
              <div className="poster-block-specimen" data-surface={block.surface}>
                {block.specimen}
              </div>
              <h4>{block.name}</h4>
              <p className="poster-block-use">{block.use}</p>
              <p className="poster-block-limit">{block.limit}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  window.PosterBlocks = PosterBlocks;
})();
