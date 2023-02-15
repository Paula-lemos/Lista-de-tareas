import { useState } from "react";

function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, title: newTask };
        } else {
          return task;
        }
      })
    );
  };
  return { tasks, addTask, deleteTask, editTask };
}
export default useTasks;
