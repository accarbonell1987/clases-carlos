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

  //TODO: Agregar funcionalidad de agregar tareas

  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasks.map((task) => (
          <ItemList key={task.id} text={task.text} completed={task.completed} />
        ))}
      </div>
    </div>
  );
}

export default App;
