import { useState } from "react";
import ItemList from "./components/ItemList";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn JavaScript", completed: false },
    { id: 3, text: "Learn HTML", completed: false },
    { id: 4, text: "Learn CSS", completed: false },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleOnChangeStatus = (id) => {
    const updateList = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateList);
  }
  const handleAddTask = () => {
    // 
  };

  //TODO: Agregar funcionalidad de agregar tareas

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Todo List</h1>
      <button style={{ backgroundColor: "blue", color: "white" }} onClick={handleAddTask}>Add Task</button>
      <div style={{
        display: "flex", flexDirection: "column", gap: "10px", border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}>
        {tasks.map((task) => (
          <ItemList key={task.id} id={task.id} text={task.text} completed={task.completed} onDelete={handleDelete} onChangeStatus={handleOnChangeStatus} />
        ))}
      </div>
    </div>
  );
}

export default App;
