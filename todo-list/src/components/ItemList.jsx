const stlye = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  gap: '8px'
};

const ItemList = ({
  id,
  completed = false,
  text = '',
  onDelete = () => {},
  onChangeStatus = () => {}
}) => {
  const backgroundColor = completed ? '#ff6600' : '#ff2200';

  return (
    <div style={{ ...stlye, backgroundColor }}>
      <input name={id} type="radio" onClick={() => onChangeStatus(id)} defaultChecked={completed} />
      <label>{text}</label>
      <button style={{ marginLeft: 'auto' }} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default ItemList;
