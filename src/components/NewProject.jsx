import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const descriptions = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescriptions = descriptions.current.value;
    const entereddueDate = dueDate.current.value;
    if (enteredTitle.trim() === "" || enteredDescriptions.trim() === "") {
      modal.current.open();
    }
    onAdd({
      title: enteredTitle,
      descriptions: enteredDescriptions,
      dueDate: entereddueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttoncaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-400 mb-4">please Provide valid value </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-400"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li className=" px-2 py-2 rounded-md bg-stone-980 text-stone-50 bg-stone-950">
            <button onClick={handleSave}>Save</button>
          </li>
        </menu>
        <Input type="text" label="Title" ref={title} />
        <Input label="Descriptions" textarea ref={descriptions} />
        <Input type="date" label="Due Date" ref={dueDate} />
      </div>
    </>
  );
}

export default NewProject;
