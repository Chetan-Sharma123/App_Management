import Task from "./Task";

function SelectedProjected({
  tasks,
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  const formattedData = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flec items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950 text-right"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedData}</p>
        <p className=" text-stone-600 whitespace-pre-wrap">
          {project.descriptions}
        </p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default SelectedProjected;
