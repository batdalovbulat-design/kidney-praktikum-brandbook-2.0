function AstryxSegmentedControl({ id = 'astryx-segmented', label, options, value, onChange }) {
  const refs = React.useRef([]);

  const select = (option, index) => {
    onChange?.(option);
    requestAnimationFrame(() => refs.current[index]?.focus());
  };

  return (
    <div className="astryx-segmented-wrap">
      <span className="astryx-control-label" id={`${id}-label`}>{label}</span>
      <div className="astryx-segmented" role="radiogroup" aria-labelledby={`${id}-label`} data-od-id={id}>
        {options.map((option, index) => (
          <button
            key={option}
            className={`astryx-segment${option === value ? ' is-selected' : ''}`}
            type="button"
            role="radio"
            aria-checked={option === value}
            tabIndex={option === value ? 0 : -1}
            ref={node => { refs.current[index] = node; }}
            onClick={() => select(option, index)}
            onKeyDown={event => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                event.preventDefault();
                const next = (index + 1) % options.length;
                select(options[next], next);
              } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                event.preventDefault();
                const next = (index - 1 + options.length) % options.length;
                select(options[next], next);
              }
            }}
            data-od-id={`${id}-option-${index}`}
          >{option}</button>
        ))}
      </div>
    </div>
  );
}

window.AstryxSegmentedControl = AstryxSegmentedControl;
