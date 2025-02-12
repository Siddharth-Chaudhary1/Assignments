import { useState } from "react";
// import "./Todo.css";
import "./App.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    const updatedTasks = [...tasks, task].sort(); // Add and sort tasks
    setTasks(updatedTasks);
    setTask(""); // Clear input field
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="Todo-container">
      <h2>Todo List</h2>
      <div className="input-button">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>{" "}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
