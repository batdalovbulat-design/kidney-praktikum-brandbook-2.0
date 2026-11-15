(() => {
  const { useMemo } = React;

  function hexToRgb(hex) {
    const clean = String(hex).replace('#', '');
    const full = clean.length === 3 ? clean.split('').map(char => char + char).join('') : clean;
    const value = parseInt(full, 16);
    return {
      r: (value >> 16) & 255,
      g: (value >> 8) & 255,
      b: value & 255
    };
  }

  function channel(value) {
    const normalized = value / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  }

  function luminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  }

  function contrast(first, second) {
    const a = luminance(first);
    const b = luminance(second);
    const light = Math.max(a, b);
    const dark = Math.min(a, b);
    return (light + 0.05) / (dark + 0.05);
  }

  const LABELS = {
    pass: 'ОК',
    warn: 'Риск',
    fail: 'Ошибка',
    info: 'Справка'
  };

  function StatusIcon({ status }) {
    if (status === 'pass') {
      return (
        <svg viewBox="0 0 20 20" className="print-check__icon" aria-hidden="true">
          <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (status === 'warn' || status === 'fail') {
      return (
        <svg viewBox="0 0 20 20" className="print-check__icon" aria-hidden="true">
          <path d="M10 3v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="15.5" r="1.4" fill="currentColor" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 20 20" className="print-check__icon" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="6" r="1" fill="currentColor" />
      </svg>
    );
  }

  function PrintCheck({ campaign, formatId, photo, photoMeta, logoReady }) {
    const fontsReady = window.usePosterFontsReady();
    const metrics = useMemo(
      () => (fontsReady ? window.measurePoster(campaign, formatId) : null),
      [campaign, formatId, fontsReady]
    );

    if (!metrics) {
      return <p className="poster-hint">Готовлю проверки…</p>;
    }

    const fmt = metrics.format;
    const print = fmt.kind === 'print';
    const poster = metrics.series === 'poster';

    const fileRows = [
      {
        label: 'Формат',
        value: `${fmt.name} · ${fmt.hint}`,
        status: 'pass'
      },
      {
        label: 'Разрешение',
        value: print ? '300 dpi в размер 70×140 мм' : 'Экранный формат, 1×',
        status: 'pass'
      },
      {
        label: 'Вылет',
        value: print ? '3 мм при экспорте с вылетом' : 'Не требуется',
        status: print ? 'pass' : 'info',
        detail: print ? 'PNG расширяется на 3 мм с каждой стороны.' : 'Для соцсетей вылет не нужен.'
      },
      {
        label: 'Цвет',
        value: 'RGB → CMYK',
        status: 'info',
        detail: 'Браузер сохраняет PNG в RGB. CMYK-профиль согласуйте с типографией.'
      }
    ];

    const textRows = [
      {
        label: 'Строки заголовка',
        value: `${metrics.lineCount} из ${metrics.maxLines}`,
        status: metrics.lineCount <= metrics.maxLines ? 'pass' : 'fail',
        detail: metrics.lineCount <= metrics.maxLines ? 'Блок не заходит на дату и лектора.' : 'Сократите заголовок: блок перекрывает соседние поля.'
      },
      {
        label: 'Кегль заголовка',
        value: `${Math.round(metrics.headlineSize)} px`,
        status: metrics.headlineFittedRatio < 0.92 ? 'warn' : 'pass',
        detail: metrics.headlineFittedRatio < 0.92
          ? `Кегль уменьшен до ${Math.round(metrics.headlineFittedRatio * 100)}%, чтобы уложить текст.`
          : 'Кегль на базовом размере серии.'
      },
      {
        label: 'Осиротевшая строка',
        value: metrics.lineCount > 1 && metrics.lastLineWords === 1 ? `«${metrics.lastLine}»` : 'Нет',
        status: metrics.lineCount > 1 && metrics.lastLineWords === 1 ? 'warn' : 'pass',
        detail: metrics.lineCount > 1 && metrics.lastLineWords === 1
          ? 'Одно слово на последней строке выглядит случайным. Перепишите заголовок.'
          : 'Переносы не оставляют одно слово на последней строке.'
      },
      {
        label: 'Самое длинное слово',
        value: `${Math.round(metrics.longestWordWidth)} px`,
        status: metrics.longestWordWidth <= metrics.headlineTextWidth ? 'pass' : 'fail',
        detail: metrics.longestWordWidth <= metrics.headlineTextWidth
          ? 'Самый длинный фрагмент помещается в текстовую колонку.'
          : 'Слово шире текстовой колонки и выйдет за чёрную плашку.'
      },
      {
        label: 'Цена в одну строку',
        value: `${Math.round(metrics.priceWidth)} px`,
        status: metrics.priceFits ? 'pass' : 'fail',
        detail: metrics.priceFits ? 'Цена не переносится и не обрезается.' : 'Сократите цену или формат записи.'
      },
      {
        label: 'Дата в одну строку',
        value: `${Math.round(metrics.dateWidth)} px`,
        status: metrics.dateWidth <= metrics.dateMaxWidth ? 'pass' : 'fail',
        detail: 'Дата и время остаются одной строкой.'
      },
      {
        label: 'Читаемость с расстояния',
        value: `${Math.round((metrics.headlineSize / Math.min(metrics.width, metrics.height)) * 100)}% короткой стороны`,
        status: metrics.headlineSize / Math.min(metrics.width, metrics.height) >= 0.05 ? 'pass' : 'warn',
        detail: 'Крупный кегль держит плакат на дистанции.'
      },
      {
        label: 'Безопасное поле',
        value: metrics.safe.label,
        status: metrics.contentLeft >= metrics.safe.x && metrics.contentRight <= metrics.width - metrics.safe.x ? 'pass' : 'fail',
        detail: 'Ключевой текст не подходит к резу и краю кадра.'
      }
    ];

    let photoRow;
    if (!photo) {
      photoRow = {
        label: 'Фотография лектора',
        value: 'Нет файла',
        status: 'fail',
        detail: 'Сейчас стоит заглушка с инициалами. Загрузите настоящий портрет.'
      };
    } else if (photoMeta && photoMeta.width) {
      if (print) {
        const diameterMm = (metrics.photoDiameter / metrics.width) * 70;
        const dpi = Math.round(photoMeta.width / (diameterMm / 25.4));
        photoRow = {
          label: 'Фотография лектора',
          value: `≈ ${dpi} dpi`,
          status: dpi >= 300 ? 'pass' : dpi >= 150 ? 'warn' : 'fail',
          detail: `Круг ${Math.round(diameterMm)} мм в печати. Нужен реальный портрет без апскейла.`
        };
      } else {
        const ratio = photoMeta.width / metrics.photoDiameter;
        photoRow = {
          label: 'Фотография лектора',
          value: `${Math.round(ratio * 100)}% запаса`,
          status: ratio >= 1.5 ? 'pass' : ratio >= 1 ? 'warn' : 'fail',
          detail: 'Считаю запас по ширине круга на экране.'
        };
      }
    } else {
      photoRow = {
        label: 'Фотография лектора',
        value: 'Размер неизвестен',
        status: 'warn',
        detail: 'Загрузите файл заново, чтобы проверить разрешение.'
      };
    }

    const worstContrast = poster
      ? Math.min(contrast('#ffffff', '#0e0e10'), contrast('#ffffff', '#2236d8'))
      : contrast('#0e0e10', '#f5efe6');

    const assetRows = [
      photoRow,
      {
        label: 'Логотип',
        value: logoReady ? 'Исходный SVG' : 'Не загрузился',
        status: logoReady ? 'pass' : 'fail',
        detail: logoReady ? 'Знак берётся из assets/logo/logo_main.svg без перерисовки.' : 'Проверьте путь к логотипу перед выгрузкой.'
      },
      {
        label: 'Контраст ключевых пар',
        value: `${worstContrast.toFixed(1)}:1`,
        status: worstContrast >= 4.5 ? 'pass' : worstContrast >= 3 ? 'warn' : 'fail',
        detail: poster ? 'Белый текст на чёрном блоке и на синем поле.' : 'Чёрный текст на кремовом поле.'
      }
    ];

    const groups = [
      { title: 'Файл и формат', rows: fileRows },
      { title: 'Текст', rows: textRows },
      { title: 'Изображения и знак', rows: assetRows }
    ];

    const actionable = fileRows.concat(textRows, assetRows).filter(row => row.status !== 'info');
    const passed = actionable.filter(row => row.status === 'pass').length;
    const fails = actionable.filter(row => row.status === 'fail').length;
    const warns = actionable.filter(row => row.status === 'warn').length;
    const overall = fails ? 'fail' : warns ? 'warn' : 'pass';
    const summary = fails
      ? 'Есть блокирующие замечания'
      : warns
        ? 'Можно выгружать, есть риски'
        : 'Проверки пройдены';

    return (
      <div className="print-check" id="poster-checklist">
        <div className="print-check__summary" data-status={overall}>
          <div>
            <strong>{summary}</strong>
            <span>{passed} из {actionable.length} проверок пройдено</span>
          </div>
          <span className="print-check__badge">{fails ? 'Доработать' : warns ? 'Проверить' : 'Готово'}</span>
        </div>

        {groups.map(group => (
          <section className="print-check__group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.rows.map(row => (
                <li className="print-check__row" key={row.label} data-status={row.status}>
                  <StatusIcon status={row.status} />
                  <div className="print-check__text">
                    <span className="print-check__label">{row.label}</span>
                    {row.detail && <span className="print-check__detail">{row.detail}</span>}
                  </div>
                  <div className="print-check__result">
                    <span className="print-check__value">{row.value}</span>
                    <span className="print-check__status">{LABELS[row.status]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="poster-print-memo">
          <h3>Памятка печати</h3>
          <ul>
            <li>Вылет 3 мм с каждой стороны, текст не ближе 5 мм к резу.</li>
            <li>Файл для типографии: PNG 300 dpi с вылетом; CMYK согласуйте с печатником.</li>
            <li>Цена, дата и регалии остаются одной строкой и полными.</li>
            <li>Ч/б портрет допустим только в постерной серии.</li>
          </ul>
        </div>
      </div>
    );
  }

  window.PrintCheck = PrintCheck;
})();
