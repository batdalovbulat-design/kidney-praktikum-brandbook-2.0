(() => {
  const { useState: useAppState } = React;

  function App() {
    const [course, setCourse] = useAppState('Первичная переподготовка по УЗД');

    const selectCourse = title => {
      setCourse(title);
      requestAnimationFrame(() => {
        document.getElementById('enroll-course')?.focus({ preventScroll: true });
      });
    };

    return (
      <div className="app-shell">
        <Sidebar />
        <ChatArea onSelect={selectCourse} />
        <InputBar course={course} onCourseChange={setCourse} />
        <SiteFooter />
      </div>
    );
  }

  window.App = App;
})();
