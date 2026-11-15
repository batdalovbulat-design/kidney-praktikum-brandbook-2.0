function AstryxSelector({ id = 'astryx-selector', label, options, value, onChange, helper, error, required = false }) {
  const describedBy = error ? `${id}-error` : helper ? `${id}-helper` : undefined;

  return (
    <div className="astryx-selector">
      <label className="astryx-control-label" htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <select className="astryx-select" id={id} value={value} onChange={event => onChange?.(event.target.value)} required={required} aria-invalid={Boolean(error)} aria-describedby={describedBy} data-od-id={id}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      {helper && !error && <p className="astryx-control-helper" id={`${id}-helper`}>{helper}</p>}
      {error && <p className="astryx-control-error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

window.AstryxSelector = AstryxSelector;
