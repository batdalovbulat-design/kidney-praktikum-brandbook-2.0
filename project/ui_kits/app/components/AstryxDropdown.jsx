function AstryxDropdown({ id = 'astryx-dropdown', label, options, value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(Math.max(0, options.indexOf(value)));
  const rootRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const optionRefs = React.useRef([]);

  const focusOption = index => {
    const bounded = (index + options.length) % options.length;
    setActiveIndex(bounded);
    optionRefs.current[bounded]?.focus();
  };

  const openMenu = () => {
    const selectedIndex = Math.max(0, options.indexOf(value));
    setActiveIndex(selectedIndex);
    setOpen(true);
    requestAnimationFrame(() => optionRefs.current[selectedIndex]?.focus());
  };

  const select = option => {
    onChange?.(option);
    setOpen(false);
    triggerRef.current?.focus();
  };

  React.useEffect(() => {
    if (!open) return;
    const onPointer = event => { if (!rootRef.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [open]);

  return (
    <div className="astryx-dropdown" ref={rootRef}>
      <span className="astryx-control-label" id={`${id}-label`}>{label}</span>
      <button className="astryx-dropdown-trigger" type="button" ref={triggerRef} aria-labelledby={`${id}-label ${id}-value`} aria-haspopup="menu" aria-expanded={open} onClick={() => open ? setOpen(false) : openMenu()} onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); openMenu(); } }} data-od-id={`${id}-trigger`}>
        <span id={`${id}-value`}>{value}</span>
        <span aria-hidden="true">↓</span>
      </button>
      <div className="astryx-dropdown-menu" role="menu" aria-labelledby={`${id}-label`} hidden={!open}>
        {options.map((option, index) => (
          <button
            key={option}
            className={`astryx-dropdown-option${option === value ? ' is-selected' : ''}`}
            type="button"
            role="menuitemradio"
            aria-checked={option === value}
            tabIndex={activeIndex === index ? 0 : -1}
            ref={node => { optionRefs.current[index] = node; }}
            onClick={() => select(option)}
            onKeyDown={event => {
              if (event.key === 'ArrowDown') { event.preventDefault(); focusOption(index + 1); }
              else if (event.key === 'ArrowUp') { event.preventDefault(); focusOption(index - 1); }
              else if (event.key === 'Home') { event.preventDefault(); focusOption(0); }
              else if (event.key === 'End') { event.preventDefault(); focusOption(options.length - 1); }
              else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(option); }
              else if (event.key === 'Escape') { event.preventDefault(); setOpen(false); triggerRef.current?.focus(); }
            }}
            data-od-id={`${id}-option-${index}`}
          >{option}</button>
        ))}
      </div>
    </div>
  );
}

window.AstryxDropdown = AstryxDropdown;
