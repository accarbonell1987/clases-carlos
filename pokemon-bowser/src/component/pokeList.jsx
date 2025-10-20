import React from "react";
import "../styles/pokeList.css";
import { useNavigate } from "react-router-dom";

const PokeList = ({ name = "", id, font, height, weight }) => {
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/poke/details/${id}`, {
      state: { name, id, font, height, weight },
    });
  };

  return (
    <div>
      <ul className="poke-ul">
        <li className="poke-li">
          <img src={font} />
          {name}
          <button className="btn" onClick={() => handleView(id)}>
            view
          </button>
        </li>
      </ul>
    </div>
  );
};
export default PokeList;
