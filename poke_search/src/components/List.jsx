import { useNavigate } from "react-router";

const List = () => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/pokemon/details/${id}`);
  }

  return (
    <div>
      <ul>
        <li><div>Ditto <button onClick={() => handleDetailClick(1)}>DETALLE</button></div></li>
        <li><div>Charizzard <button onClick={() => handleDetailClick(100)}>DETALLE</button></div></li>
        <li><div>Pikachu <button onClick={() => handleDetailClick(200)}>DETALLE</button></div></li>
      </ul>
    </div>
  )
}

export default List
