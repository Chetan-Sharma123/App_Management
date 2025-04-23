import { useState } from "react";

function NewTask({ onAdd }) {
  const [interedTask, setInteredTask] = useState("");
  function handleChange(event) {
    setInteredTask(event.target.value);
  }
  function handleClick() {
    if (interedTask.trim() === "") {
      return;
    }
    onAdd(interedTask);
    setInteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={interedTask}
        onChange={handleChange}
      />
      <button
        className="bg-stone-400 hover:text-stone-950 p-1 rounded-sm"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
