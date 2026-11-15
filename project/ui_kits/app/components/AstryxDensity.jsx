function AstryxDensity({ children }) {
  const [preset, setPreset] = React.useState('default');

  return (
    <section className="astryx-density" data-density={preset} data-od-id="astryx-density">
      <div className="astryx-density-toolbar">
        <div>
          <h2 className="section-heading">Пресеты плотности</h2>
          <p className="section-note">Compact, default, comfortable и gigantic меняют только ритм и размеры элементов. Цвета, гарнитура и радиусы остаются фирменными. Интерактивные цели не становятся меньше 44px.</p>
        </div>
        <AstryxSegmentedControl id="density-preset" label="Плотность" options={['compact', 'default', 'comfortable', 'gigantic']} value={preset} onChange={setPreset} />
      </div>
      <div className="astryx-density-content">{children}</div>
    </section>
  );
}

window.AstryxDensity = AstryxDensity;
