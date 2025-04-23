import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProjected from "./components/SelectedProjected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // Corrected spelling here
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    let taskId = Math.random();
    setProjectState((previewState) => {
      const newTask = {
        text: text,
        projectId: previewState.selectedProjectId,
        id: taskId,
      };
      return {
        ...previewState,
        tasks: [newTask, ...previewState.tasks],
      };
    });
  }
  function handleDeletingTask(id) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleDeleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: projectState.projects.filter((project) => {
        project.id !== prevState.selectedProjectId;
      }),
    }));
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleAddProject(projectData) {
    let projectId = Math.random();
    setProjectState((previewState) => {
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...previewState,
        projects: [...previewState.projects, newProject],
      };
    });
  }
  function handleCancelProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }
  function handleStartProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProjected
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeletingTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartProject={handleStartProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
