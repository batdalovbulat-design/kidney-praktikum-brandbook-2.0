function AssistantsList({ onSelect }) {
  return (
    <div className="program-rail" aria-label="Список образовательных программ">
      <CourseGrid onSelect={onSelect} />
    </div>
  );
}

window.AssistantsList = AssistantsList;
