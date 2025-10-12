import { useState } from 'react';
import ItemList from './components/ItemList';
import './styles/App.css';

function App() {
  const [switsh, setSwitsh] = useState(false);
  const [count, setCount] = useState(0);
  const [additem, setAdditem] = useState({ text: '' });
  const [tasks, setTasks] = useState([]);

  const handleDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const handleOnChangeStatus = id => {
    const updateList = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateList);
  };
  const handleNewItem = e => {
    const newItem = e.target.value;
    setAdditem({ text: newItem });
  };

  const handleSetadd = () => {
    setSwitsh(true);
  };

  const handleUnselect = () => {
    setSwitsh(false);
  };
  const handleAddTask = () => {
    if (!additem.text || additem.text === '') {
      return;
    }
    setCount(count + 1);
    console.log(additem);
    setTasks([...tasks, { ...additem, id: count, completed: false }]);
    setAdditem({ text: '' });
  };

  //TODO: Agregar funcionalidad de agregar tareas

  return (
    <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
      <h1>Todo List</h1>
      {!switsh ? (
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleSetadd}>
          Add Task
        </button>
      ) : null}
      {switsh ? (
        <input type="text" className="add-task" onChange={handleNewItem} value={additem.text} />
      ) : null}
      {switsh ? (
        <button type="text" className="btn" onClick={handleAddTask}>
          add
        </button>
      ) : null}
      {switsh ? (
        <button type="text" className="btn" onClick={handleUnselect}>
          Cancel
        </button>
      ) : null}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        {tasks.map(task => (
          <ItemList
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onDelete={() => handleDelete(task.id)}
            onChangeStatus={() => handleOnChangeStatus(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
