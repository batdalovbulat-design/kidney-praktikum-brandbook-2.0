(() => {
  const { useEffect, useState } = React;

  const DEFAULT_CAMPAIGN = {
    kicker: 'Кидней.Практикум',
    title: 'Нейросонография: протокол и нормы',
    program: 'Цикл лекций',
    speaker: 'Пыков Михаил Иванович',
    credentials: 'Профессор, д.м.н. · РМАНПО',
    date: '12 августа · 10:00',
    price: '15 000 ₽',
    mode: 'Онлайн',
    series: 'poster'
  };

  const TABS = [
    { id: 'editor', label: 'Редактор' },
    { id: 'blocks', label: 'Блоки' },
    { id: 'check', label: 'Проверка печати' }
  ];

  function PosterStudio({ initialTab }) {
    const { PosterCanvas, PosterCampaignEditor, PosterBlocks, PrintCheck, POSTER_FORMATS, getPosterFormat } = window;
    const [tab, setTab] = useState(initialTab && TABS.some(item => item.id === initialTab) ? initialTab : 'editor');
    const [campaign, setCampaign] = useState(DEFAULT_CAMPAIGN);
    const [formatId, setFormatId] = useState('4:5');
    const [photo, setPhoto] = useState('');
    const [photoMeta, setPhotoMeta] = useState(null);
    const [grayscale, setGrayscale] = useState(false);
    const [guides, setGuides] = useState(true);
    const [withBleed, setWithBleed] = useState(true);
    const [logoReady, setLogoReady] = useState(false);

    const logoPath = window.location.pathname.includes('/preview/')
      ? '../assets/logo/logo_main.svg'
      : '../../assets/logo/logo_main.svg';

    useEffect(() => {
      let active = true;
      window.loadPosterImage(logoPath)
        .then(() => { if (active) setLogoReady(true); })
        .catch(() => { if (active) setLogoReady(false); });
      return () => { active = false; };
    }, [logoPath]);

    const update = (name, value) => {
      setCampaign(current => ({ ...current, [name]: value }));
      if (name === 'series' && value === 'light') setGrayscale(false);
    };

    const handlePhoto = src => {
      setPhoto(src);
      window.loadPosterImage(src)
        .then(image => setPhotoMeta({ width: image.naturalWidth, height: image.naturalHeight }))
        .catch(() => setPhotoMeta(null));
    };

    const clearPhoto = () => {
      setPhoto('');
      setPhotoMeta(null);
      setGrayscale(false);
    };

    const moveTab = event => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const index = TABS.findIndex(item => item.id === tab);
      const nextIndex = event.key === 'ArrowRight'
        ? (index + 1) % TABS.length
        : (index - 1 + TABS.length) % TABS.length;
      const next = TABS[nextIndex];
      setTab(next.id);
      const button = event.currentTarget.parentElement.querySelector(`#poster-tab-${next.id}`);
      if (button) button.focus();
    };

    return (
      <section className="poster-studio" id="poster-studio" aria-labelledby="poster-studio-title">
        <div className="poster-studio__head">
          <div>
            <p className="poster-kicker">Типографика · постерная серия</p>
            <h2 id="poster-studio-title">Постерная студия</h2>
            <p className="poster-lead">
              Соберите постер из реальных полей, проверьте печатный макет и сохраните PNG.
              Демонстрационные дата, цена и программа взяты из исходного макета и требуют подтверждения перед публикацией.
            </p>
          </div>
          <span className="poster-studio__badge">4 формата · 15 пунктов</span>
        </div>

        <div className="poster-tabs" role="tablist" aria-label="Постерная студия">
          {TABS.map(item => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`poster-tab-${item.id}`}
              aria-selected={tab === item.id}
              aria-controls={`poster-panel-${item.id}`}
              tabIndex={tab === item.id ? 0 : -1}
              className="poster-tab"
              onClick={() => setTab(item.id)}
              onKeyDown={moveTab}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="poster-panel-editor"
          aria-labelledby="poster-tab-editor"
          className="poster-panel"
          hidden={tab !== 'editor'}
        >
          <PosterCampaignEditor
            campaign={campaign}
            onChange={update}
            formatId={formatId}
            onFormat={setFormatId}
            photo={photo}
            onPhoto={handlePhoto}
            onClearPhoto={clearPhoto}
            grayscale={grayscale}
            onGrayscale={setGrayscale}
            guides={guides}
            onGuides={setGuides}
            withBleed={withBleed}
            onBleed={setWithBleed}
            logoPath={logoPath}
          />
        </div>

        <div
          role="tabpanel"
          id="poster-panel-blocks"
          aria-labelledby="poster-tab-blocks"
          className="poster-panel"
          hidden={tab !== 'blocks'}
        >
          <PosterBlocks logoPath={logoPath} />
        </div>

        <div
          role="tabpanel"
          id="poster-panel-check"
          aria-labelledby="poster-tab-check"
          className="poster-panel"
          hidden={tab !== 'check'}
        >
          <div className="poster-check-layout">
            <div className="poster-check-layout__main">
              <div className="poster-check-formats" role="radiogroup" aria-label="Формат для проверки">
                {POSTER_FORMATS.map(format => (
                  <button
                    key={format.id}
                    type="button"
                    role="radio"
                    aria-checked={format.id === formatId}
                    className="poster-format poster-format--compact"
                    onClick={() => setFormatId(format.id)}
                  >
                    <span className="poster-format__label">{format.label}</span>
                    <span className="poster-format__name">{format.name}</span>
                  </button>
                ))}
              </div>
              <p className="poster-hint">
                Демо открывается без портрета: проверка честно показывает, что настоящий портрет нужно загрузить в редакторе.
              </p>
              <PrintCheck
                campaign={campaign}
                formatId={formatId}
                photo={photo}
                photoMeta={photoMeta}
                logoReady={logoReady}
              />
            </div>
            <div className="poster-check-layout__preview" data-series={campaign.series === 'light' ? 'light' : 'poster'}>
              <div className="poster-stage">
                <PosterCanvas
                  campaign={campaign}
                  formatId={formatId}
                  photo={photo}
                  grayscale={grayscale && campaign.series !== 'light'}
                  logoPath={logoPath}
                  className="poster-canvas"
                />
              </div>
              <p className="poster-hint">{getPosterFormat(formatId).name} · {getPosterFormat(formatId).hint}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.PosterStudio = PosterStudio;
})();
