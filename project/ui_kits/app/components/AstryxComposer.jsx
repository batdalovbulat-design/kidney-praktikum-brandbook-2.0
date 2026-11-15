const { useState: useAstryxComposerState } = React;

function AstryxComposer({
  value,
  onChange,
  onSubmit,
  onStop,
  placeholder = 'Опишите запрос',
  isDisabled = false,
  isStopShown = false,
  density = 'balanced',
  status,
  statusPosition = 'bottom',
  header,
  footer,
  drawer,
  id = 'astryx-composer'
}) {
  const [internalValue, setInternalValue] = useAstryxComposerState('');
  const [isDrawerOpen, setIsDrawerOpen] = useAstryxComposerState(false);
  const draft = value !== undefined ? value : internalValue;
  const isEmpty = !draft.trim();

  const updateDraft = next => {
    if (isDisabled) return;
    if (onChange) onChange(next);
    else setInternalValue(next);
  };

  const submit = () => {
    const clean = draft.trim();
    if (!clean || isDisabled || isStopShown) return;
    onSubmit?.(clean);
    if (onChange) onChange('');
    else setInternalValue('');
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      submit();
    }
  };

  const statusNode = status && (
    <p className={`astryx-composer-status astryx-composer-status--${status.tone || 'info'}`} aria-live={status.tone === 'error' ? 'assertive' : 'polite'}>
      {status.text}
    </p>
  );

  return (
    <section className="astryx-composer" data-density={density} data-od-id={id}>
      {statusPosition === 'top' && statusNode}
      {drawer && (
        <div className="astryx-composer-drawer">
          <button className="astryx-disclosure" type="button" aria-expanded={isDrawerOpen} aria-controls={`${id}-drawer`} onClick={() => setIsDrawerOpen(current => !current)} data-od-id={`${id}-disclosure`}>
            {isDrawerOpen ? 'Скрыть детали' : 'Показать детали'}
          </button>
          <div className="astryx-composer-drawer-content" id={`${id}-drawer`} hidden={!isDrawerOpen}>
            {drawer}
          </div>
        </div>
      )}
      {header && <div className="astryx-composer-header">{header}</div>}
      <div className="astryx-composer-body">
        <label className="sr-only" htmlFor={`${id}-input`}>Текст запроса</label>
        <textarea
          className="astryx-composer-input"
          id={`${id}-input`}
          value={draft}
          onChange={event => updateDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          rows={3}
          data-od-id={`${id}-input`}
        />
      </div>
      <div className="astryx-composer-footer">
        <div className="astryx-composer-footer-actions">{footer}</div>
        {isStopShown ? (
          <button className="button button--orange" type="button" onClick={onStop} data-od-id={`${id}-stop`}>Остановить</button>
        ) : (
          <button className="button button--orange" type="button" onClick={submit} disabled={isDisabled || isEmpty} data-od-id={`${id}-send`}>Сохранить запрос</button>
        )}
      </div>
      {statusPosition === 'bottom' && statusNode}
    </section>
  );
}

window.AstryxComposer = AstryxComposer;
