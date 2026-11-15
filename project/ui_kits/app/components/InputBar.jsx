function InputBar({ course, onCourseChange }) {
  return (
    <div className="enrollment-composer" aria-label="Композер заявки на программу">
      <EnrollForm course={course} onCourseChange={onCourseChange} />
    </div>
  );
}

window.InputBar = InputBar;
