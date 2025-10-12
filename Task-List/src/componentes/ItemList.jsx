const style = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  gap: "8px",
  padding: "10px",
};

const ItemList = ({
  name = "",
  completed = false,
  remove = () => {},
  handleCheck = () => {},
}) => {
  const backgroundColor = completed ? "#d4edda" : "#fff";

  return (
    <div style={{ ...style, backgroundColor }}>
      <input type="radio" checked={completed} onClick={(e) => handleCheck(e)} />
      <label>{name}</label>
      <button onClick={remove} className="btn">
        Delete
      </button>
    </div>
  );
};

export default ItemList;
