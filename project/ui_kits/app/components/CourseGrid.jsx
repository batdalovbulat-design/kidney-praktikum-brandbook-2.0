function CourseCard({ eyebrow, title, date, price, tone, onSelect }) {
  return (
    <article className={`course-card course-card--${tone}`}>
      <div>
        <p className="course-card-eyebrow">{eyebrow}</p>
        <h3 className="course-card-title">{title}</h3>
      </div>
      <div className="course-card-bottom">
        <div className="course-card-meta">
          <div>
            <span className="course-meta-label">Старт</span>
            <span className="course-date">{date}</span>
          </div>
          <span className="price-pill">{price}</span>
        </div>
        <button className="course-select" type="button" onClick={() => onSelect(title)} aria-label={`Выбрать программу «${title}»`}>
          Выбрать программу
        </button>
      </div>
    </article>
  );
}

function CourseGrid({ onSelect }) {
  const courses = [
    { eyebrow: 'Двухнедельный курс', title: 'Вакцинопрофилактика', date: '24 июля', price: '22 500 ₽', tone: 'cream' },
    { eyebrow: 'Цикл лекций', title: 'Нейросонография', date: '12 августа', price: '15 000 ₽', tone: 'orange' },
    { eyebrow: 'Конференция', title: 'Почка и инфекция', date: '26–27 августа', price: 'Бесплатно', tone: 'white' }
  ];

  return (
    <section className="section" id="programs" aria-labelledby="programs-title">
      <div className="container">
        <div className="section-topline">
          <h2 className="section-heading" id="programs-title">Программы</h2>
          <a className="footer-link" href="#enroll">Запросить программу</a>
        </div>
        <div className="course-grid">
          {courses.map(course => <CourseCard key={course.title} {...course} onSelect={onSelect} />)}
        </div>
        <p className="section-note">Даты и стоимость воспроизводят исходный демонстрационный макет. Перед публикацией замените их актуальными данными.</p>
      </div>
    </section>
  );
}

window.CourseCard = CourseCard;
window.CourseGrid = CourseGrid;
