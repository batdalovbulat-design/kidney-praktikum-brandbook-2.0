function AstryxDialog({ id = 'astryx-dialog', triggerLabel = 'Открыть диалог', title, children, footer }) {
  const dialogRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    const restoreFocus = () => triggerRef.current?.focus();
    dialog?.addEventListener('close', restoreFocus);
    return () => dialog?.removeEventListener('close', restoreFocus);
  }, []);

  const open = () => {
    if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  };

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button className="demo-button demo-button--secondary" type="button" ref={triggerRef} onClick={open} aria-haspopup="dialog" aria-controls={id} data-od-id={`${id}-trigger`}>{triggerLabel}</button>
      <dialog className="astryx-dialog" id={id} ref={dialogRef} aria-labelledby={`${id}-title`} data-od-id={id} onClick={event => { if (event.target === dialogRef.current) close(); }}>
        <div className="astryx-dialog-frame">
          <header className="astryx-dialog-header">
            <h2 id={`${id}-title`}>{title}</h2>
            <button className="astryx-text-button" type="button" onClick={close} aria-label="Закрыть диалог" data-od-id={`${id}-close`}>Закрыть</button>
          </header>
          <div className="astryx-dialog-body">{children}</div>
          {footer && <footer className="astryx-dialog-footer">{footer}</footer>}
        </div>
      </dialog>
    </>
  );
}

window.AstryxDialog = AstryxDialog;
