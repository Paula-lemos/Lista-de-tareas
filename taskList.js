import React, { useState } from "react";
import useTasks from "./useTasks";

function TaskList() {
  const [newTask, setNewTask] = useState("");
  const { tasks, addTask, deleteTask, editTask } = useTasks([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title: newTask });
    setNewTask("");
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEditTask = (taskId, newTitle) => {
    editTask(taskId, newTitle);
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleEditTask(task.id, "new title")}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
