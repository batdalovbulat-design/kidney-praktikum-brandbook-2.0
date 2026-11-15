const { useState: useEnrollState } = React;

function EnrollForm({ course, onCourseChange }) {
  const [name, setName] = useEnrollState('');
  const [phone, setPhone] = useEnrollState('');
  const [specialty, setSpecialty] = useEnrollState('Педиатр');
  const [errors, setErrors] = useEnrollState({});
  const [submitted, setSubmitted] = useEnrollState(false);

  const validateField = (field, value) => {
    if (field === 'name' && value.trim().length < 3) return 'Укажите фамилию, имя и отчество.';
    if (field === 'phone' && value.replace(/\D/g, '').length < 10) return 'Укажите телефон минимум из 10 цифр.';
    return '';
  };

  const updateError = (field, value) => {
    setErrors(current => ({ ...current, [field]: validateField(field, value) }));
  };

  const submit = event => {
    event.preventDefault();
    const nextErrors = {
      name: validateField('name', name),
      phone: validateField('phone', phone)
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) {
      const first = nextErrors.name ? 'enroll-name' : 'enroll-phone';
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setName('');
    setPhone('');
    setSpecialty('Педиатр');
    setErrors({});
    setSubmitted(false);
    requestAnimationFrame(() => document.getElementById('enroll-name')?.focus());
  };

  if (submitted) {
    return (
      <section className="section enroll-section" id="enroll" aria-labelledby="success-title" role="status" aria-live="polite">
        <div className="container enroll-success">
          <p className="enroll-kicker">Заявка отправлена</p>
          <h2 className="enroll-title" id="success-title">Мы свяжемся с вами в течение дня</h2>
          <p className="enroll-success-copy">Спасибо, {name.trim().split(' ')[0] || 'коллега'}. Куратор курса позвонит на номер {phone} и пришлёт программу «{course}».</p>
          <p className="enroll-success-copy">Специализация: {specialty}.</p>
          <div className="form-actions">
            <button className="button button--outline-light" type="button" onClick={reset}>Подать ещё одну</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section enroll-section" id="enroll" aria-labelledby="enroll-title">
      <div className="container enroll-grid">
        <div>
          <p className="enroll-kicker">Записаться</p>
          <h2 className="enroll-title" id="enroll-title">Подайте заявку</h2>
          <p className="enroll-copy">Куратор перезвонит, пришлёт программу и реквизиты. Без давления и навязывания.</p>
          <p className="legal-copy">Лицензия Минобрнауки РД № Л035-01227-05/00665847. Диплом установленного образца с регистрацией в ФИС ФРДО.</p>
        </div>
        <form className="enroll-form" onSubmit={submit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="enroll-name">ФИО <span className="required-mark" aria-hidden="true">*</span></label>
            <input className="form-input" id="enroll-name" name="name" autoComplete="name" required value={name} onChange={event => { setName(event.target.value); if (errors.name) updateError('name', event.target.value); }} onBlur={event => updateError('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'enroll-name-error' : undefined} placeholder="Магомедова Мадина Гусейновна" />
            {errors.name && <p className="form-error" id="enroll-name-error">{errors.name}</p>}
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="enroll-phone">Телефон <span className="required-mark" aria-hidden="true">*</span></label>
            <input className="form-input" id="enroll-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={phone} onChange={event => { setPhone(event.target.value); if (errors.phone) updateError('phone', event.target.value); }} onBlur={event => updateError('phone', event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'enroll-phone-error' : undefined} placeholder="+7 ___ ___ __ __" />
            {errors.phone && <p className="form-error" id="enroll-phone-error">{errors.phone}</p>}
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="enroll-specialty">Специализация</label>
            <select className="form-select" id="enroll-specialty" name="specialty" value={specialty} onChange={event => setSpecialty(event.target.value)}>
              {['Педиатр', 'УЗД-врач', 'Вакцинолог', 'Другое'].map(option => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="enroll-course">Программа</label>
            <select className="form-select" id="enroll-course" name="course" value={course} onChange={event => onCourseChange(event.target.value)}>
              {['Первичная переподготовка по УЗД', 'Вакцинопрофилактика', 'Нейросонография', 'Почка и инфекция'].map(option => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div className="form-actions">
            <button className="button button--orange" type="submit">Отправить заявку</button>
          </div>
        </form>
      </div>
    </section>
  );
}

window.EnrollForm = EnrollForm;
