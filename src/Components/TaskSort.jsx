function TaskSort({ setSort }) {
  return (
    <div className="task-sort">
      <button onClick={() => setSort("priority")}>Sort by Priority</button>
      <button onClick={() => setSort("dueDate")}>Sort by Due Date</button>
    </div>
  );
}

export default TaskSort;
