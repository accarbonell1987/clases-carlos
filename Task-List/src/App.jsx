import { useState } from "react";
import "./App.css";
import ItemList from "./componentes/ItemList";

function App() {
  const [count, setCount] = useState(0);
  const [additem, setAdditem] = useState({ name: "" });
  const [itemList, setItemList] = useState([]);

  const remove = (id) => {
    setItemList(itemList.filter((item) => item.id != id));
  };
  const handleClick = () => {
    if (!additem.name || additem.name.trim() === "") return;
    const newId = { id: count };
    setItemList([...itemList, { ...additem, ...newId, completed: false }]);
    setCount(count + 1);
    setAdditem({ name: "" });
  };
  const handleChange = (e) => {
    const newItem = e.target.value;
    setAdditem({ name: newItem });
  };
  const handleCheck = (id) => {
    const updateList = itemList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setItemList(updateList);
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={additem.name}
      />
      <button onClick={handleClick} className="btn">
        AddItem
      </button>
      <div>
        {itemList.map((task) => (
          <ItemList
            key={task.id}
            name={task.name}
            remove={() => remove(task.id)}
            completed={task.completed}
            handleCheck={() => handleCheck(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
