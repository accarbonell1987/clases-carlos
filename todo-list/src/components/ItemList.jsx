import React from "react";

const stlye = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
};

//TODO: Diferenciar entre tareas completadas y no completadas
// 1. Completadas con color de background gris
// 2. No completadas con color de background orange

//TODO: Adicionar funcion para modificar el completed

const ItemList = ({
  completed = false,
  text = "",
  onDelete = () => {},
  handleDone = () => {},
}) => {
  return (
    <div style={stlye}>
      <input type="radio" checked={completed} />
      <label>{text}</label>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ItemList;
