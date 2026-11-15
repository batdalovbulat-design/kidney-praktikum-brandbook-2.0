(() => {
  const { useEffect, useState } = React;

  const FIELDS = [
    { name: 'kicker', label: 'Надзаголовок', placeholder: 'Цикл лекций' },
    { name: 'title', label: 'Заголовок', rows: 2, placeholder: 'Нейросонография: протокол и нормы' },
    { name: 'program', label: 'Программа', placeholder: 'Практический курс · 36 академических часов' },
    { name: 'speaker', label: 'Лектор', placeholder: 'Фамилия Имя Отчество' },
    { name: 'credentials', label: 'Регалии', placeholder: 'Профессор, д.м.н. · организация' },
    { name: 'date', label: 'Дата и время', placeholder: '12 августа · 10:00' },
    { name: 'price', label: 'Цена', placeholder: '15 000 ₽' }
  ];

  function PosterCampaignEditor({
    campaign,
    onChange,
    formatId,
    onFormat,
    photo,
    onPhoto,
    onClearPhoto,
    grayscale,
    onGrayscale,
    guides,
    onGuides,
    withBleed,
    onBleed,
    logoPath
  }) {
    const { PosterCanvas, POSTER_FORMATS, getPosterFormat, measurePoster, loadPosterImage, renderPosterToCanvas } = window;
    const [logoState, setLogoState] = useState('loading');
    const [busy, setBusy] = useState('');
    const [notice, setNotice] = useState('');
    window.usePosterFontsReady();
    const fmt = getPosterFormat(formatId);
    const metrics = measurePoster(campaign, formatId);
    const safe = fmt.kind === 'print'
      ? { x: (5 / 70) * 100, y: (5 / 140) * 100 }
      : { x: 5, y: 5 };

    useEffect(() => {
      let active = true;
      setLogoState('loading');
      loadPosterImage(logoPath)
        .then(() => { if (active) setLogoState('ready'); })
        .catch(() => { if (active) setLogoState('missing'); });
      return () => { active = false; };
    }, [logoPath]);

    const handleFile = event => {
      const file = event.target.files && event.target.files[0];
      event.target.value = '';
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const src = String(reader.result || '');
        if (src) onPhoto(src);
      };
      reader.readAsDataURL(file);
    };

    const collect = async withBleedPixels => {
      const photoImg = photo ? await loadPosterImage(photo) : null;
      const logoImg = await loadPosterImage(logoPath);
      const bleedPx = withBleedPixels ? Math.round((3 / 25.4) * 300) : 0;
      return renderPosterToCanvas(campaign, formatId, { photoImg, logoImg, grayscale, bleedPx });
    };

    const download = async () => {
      setBusy('png');
      setNotice('');
      try {
        const canvas = await collect(fmt.kind === 'print' && withBleed);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        if (!blob) throw new Error('no-blob');
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `praktikum-poster-${formatId.replace(':', 'x')}${fmt.kind === 'print' && withBleed ? '-bleed' : ''}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        setNotice(`PNG ${canvas.width} × ${canvas.height} px собран и отправлен в загрузки.`);
      } catch (error) {
        setNotice('PNG не собрался: проверьте доступ к логотипу и откройте kit через локальный сервер.');
      } finally {
        setBusy('');
      }
    };

    const print = async () => {
      setBusy('print');
      setNotice('');
      try {
        const canvas = await collect(withBleed);
        const dataUrl = canvas.toDataURL('image/png');
        const widthMm = 70 + (withBleed ? 6 : 0);
        const heightMm = 140 + (withBleed ? 6 : 0);
        const frame = document.createElement('iframe');
        frame.style.position = 'fixed';
        frame.style.right = '0';
        frame.style.bottom = '0';
        frame.style.width = '0';
        frame.style.height = '0';
        frame.style.border = '0';
        frame.setAttribute('aria-hidden', 'true');
        frame.srcdoc = `<!doctype html><html><head><style>@page{size:${widthMm}mm ${heightMm}mm;margin:0}html,body{margin:0;padding:0}img{display:block;width:100%;height:auto}</style></head><body><img src="${dataUrl}" alt=""></body></html>`;
        document.body.appendChild(frame);
        frame.onload = () => {
          try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
          } catch (error) {
            setNotice('Печать недоступна во встроенном предпросмотре. Скачайте PNG.');
          }
          setTimeout(() => frame.remove(), 60000);
        };
        setNotice('Открываю системную печать. В PDF цвета останутся RGB.');
      } catch (error) {
        setNotice('Печатный лист не собрался. Скачайте PNG с вылетом.');
      } finally {
        setBusy('');
      }
    };

    return (
      <div className="poster-editor">
        <form className="poster-form" onSubmit={event => event.preventDefault()}>
          <fieldset className="poster-fieldset">
            <legend>Формат</legend>
            <div className="poster-formats" role="radiogroup" aria-label="Формат постера">
              {POSTER_FORMATS.map(format => (
                <button
                  key={format.id}
                  type="button"
                  role="radio"
                  aria-checked={format.id === formatId}
                  className="poster-format"
                  onClick={() => onFormat(format.id)}
                >
                  <span className="poster-format__label">{format.label}</span>
                  <span className="poster-format__name">{format.name}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="poster-fieldset">
            <legend>Серия</legend>
            <div className="poster-formats poster-formats--series" role="radiogroup" aria-label="Серия постера">
              <button
                type="button"
                role="radio"
                aria-checked={campaign.series !== 'light'}
                className="poster-format"
                onClick={() => onChange('series', 'poster')}
              >
                <span className="poster-format__label">Синяя</span>
                <span className="poster-format__name">Постерная серия</span>
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={campaign.series === 'light'}
                className="poster-format"
                onClick={() => onChange('series', 'light')}
              >
                <span className="poster-format__label">Светлая</span>
                <span className="poster-format__name">Фирменные токены</span>
              </button>
            </div>
          </fieldset>

          {FIELDS.map(field => (
            <label className="poster-field" key={field.name}>
              <span className="poster-field__label">{field.label}</span>
              {field.rows ? (
                <textarea
                  name={field.name}
                  rows={field.rows}
                  value={campaign[field.name]}
                  placeholder={field.placeholder}
                  onChange={event => onChange(field.name, event.target.value)}
                />
              ) : (
                <input
                  name={field.name}
                  type="text"
                  value={campaign[field.name]}
                  placeholder={field.placeholder}
                  onChange={event => onChange(field.name, event.target.value)}
                />
              )}
            </label>
          ))}

          <label className="poster-field">
            <span className="poster-field__label">Формат участия</span>
            <select name="mode" value={campaign.mode} onChange={event => onChange('mode', event.target.value)}>
              <option>Онлайн</option>
              <option>Офлайн</option>
            </select>
          </label>

          <div className="poster-photo">
            <span className="poster-field__label">Фотография лектора</span>
            <div className="poster-photo__row">
              <label className="poster-file">
                <input type="file" accept="image/*" onChange={handleFile} />
                <span>{photo ? 'Заменить фото' : 'Загрузить фото'}</span>
              </label>
              {photo ? (
                <button type="button" className="poster-link" onClick={onClearPhoto}>Убрать</button>
              ) : (
                <span className="poster-hint">Пока стоит фирменная заглушка с инициалами</span>
              )}
            </div>
            <label className="poster-check">
              <input
                type="checkbox"
                checked={grayscale}
                disabled={!photo || campaign.series === 'light'}
                onChange={event => onGrayscale(event.target.checked)}
              />
              <span>Ч/б портрет, только постерная серия</span>
            </label>
          </div>

          <div className="poster-toggles">
            <label className="poster-check">
              <input type="checkbox" checked={guides} onChange={event => onGuides(event.target.checked)} />
              <span>Показать безопасное поле</span>
            </label>
            {fmt.kind === 'print' && (
              <label className="poster-check">
                <input type="checkbox" checked={withBleed} onChange={event => onBleed(event.target.checked)} />
                <span>Вылет 3 мм при экспорте</span>
              </label>
            )}
          </div>

          <div className="poster-export">
            <button type="button" className="poster-button" onClick={download} disabled={busy || logoState !== 'ready'}>
              {busy === 'png' ? 'Собираю PNG…' : 'Скачать PNG'}
            </button>
            {fmt.kind === 'print' && (
              <button type="button" className="poster-button poster-button--ghost" onClick={print} disabled={busy || logoState !== 'ready'}>
                {busy === 'print' ? 'Готовлю печать…' : 'Печать / PDF'}
              </button>
            )}
          </div>
          <p className="poster-hint">
            Браузер отдаёт RGB. Для типографии скачайте PNG с вылетом и переведите файл в CMYK.
          </p>
          {logoState === 'missing' && (
            <p className="poster-notice" role="status">Логотип не загрузился, экспорт недоступен.</p>
          )}
          {notice && <p className="poster-notice" role="status">{notice}</p>}
        </form>

        <div className="poster-editor__stage" data-series={campaign.series === 'light' ? 'light' : 'poster'}>
          <div className="poster-stage">
            <div className="poster-canvas-hold">
              <PosterCanvas
                campaign={campaign}
                formatId={formatId}
                photo={photo}
                grayscale={grayscale && campaign.series !== 'light'}
                logoPath={logoPath}
                className="poster-canvas"
              />
              {guides && (
                <div className="poster-guides" aria-hidden="true">
                  <span
                    className="poster-guide-safe"
                    style={{ left: `${safe.x}%`, right: `${safe.x}%`, top: `${safe.y}%`, bottom: `${safe.y}%` }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="poster-stage-meta">
            <span>{fmt.name} · {fmt.hint}</span>
            <span className={metrics.lineCount > metrics.maxLines ? 'poster-danger' : ''}>
              Заголовок: {metrics.lineCount} из {metrics.maxLines} строк
            </span>
          </div>
          {guides && (
            <p className="poster-hint">
              Пунктир: {fmt.kind === 'print' ? '5 мм от реза' : '5% безопасное поле'}. {fmt.kind === 'print' ? 'Вылет 3 мм добавляется при экспорте.' : ''}
            </p>
          )}
        </div>
      </div>
    );
  }

  window.PosterCampaignEditor = PosterCampaignEditor;
})();
