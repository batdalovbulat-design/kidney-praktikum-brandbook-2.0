function Sidebar() {
  return (
    <div className="navigation-region">
      <a className="skip-link" href="#content">Перейти к содержанию</a>
      <SiteHeader />
    </div>
  );
}

window.Sidebar = Sidebar;
