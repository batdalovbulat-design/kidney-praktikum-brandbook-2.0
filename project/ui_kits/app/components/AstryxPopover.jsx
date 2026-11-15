function AstryxPopover({ id = 'astryx-popover', triggerLabel = 'Показать подробности', title, children }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const panelRef = React.useRef(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  React.useEffect(() => {
    if (!open) return;
    const onPointer = event => { if (!rootRef.current?.contains(event.target)) close(); };
    const onKey = event => { if (event.key === 'Escape') close(); };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="astryx-popover-root" ref={rootRef}>
      <button className="demo-button demo-button--secondary" type="button" ref={triggerRef} aria-expanded={open} aria-controls={`${id}-panel`} onClick={() => setOpen(current => !current)} data-od-id={`${id}-trigger`}>{triggerLabel}</button>
      <section className="astryx-popover-panel" id={`${id}-panel`} ref={panelRef} role="dialog" aria-label={title} tabIndex={-1} hidden={!open} data-od-id={`${id}-panel`}>
        <h3>{title}</h3>
        <div className="astryx-popover-content">{children}</div>
        <button className="astryx-text-button" type="button" onClick={close}>Закрыть</button>
      </section>
    </div>
  );
}

window.AstryxPopover = AstryxPopover;
