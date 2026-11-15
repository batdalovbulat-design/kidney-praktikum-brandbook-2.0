function AstryxTheme({ name = 'praktikum', mode = 'light', children }) {
  return (
    <div className="astryx-theme" data-astryx-theme={name} data-theme={mode}>
      {children}
    </div>
  );
}

window.AstryxTheme = AstryxTheme;
