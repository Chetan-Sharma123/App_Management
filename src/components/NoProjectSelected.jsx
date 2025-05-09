import projectImage from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectSelected({ onStartProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={projectImage}
        alt="Empty Task List "
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new One
      </p>
      <p className="mt-8">
        <Button onClick={onStartProject}>Create new Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
