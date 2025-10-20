import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PokeBowser from "./pokeBowser";
import { useState } from "react";
import "../styles/App.css";

const PokeDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const data = useLocation();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Detalles del pokemon #{params.id}</h1>

      <div className="data-details">
        <img src={data.state.font} className="img" />
        <ul>
          <li>Nombre: {data.state.name}</li>

          <li>weight: {data.state.weight}</li>
          <li>height: {data.state.height}</li>
        </ul>
      </div>
      <button className="btn" onClick={() => handleBack()}>
        Return
      </button>
      <button className="btn">Put in galery</button>
      <button className="btn">Show galery</button>
    </div>
  );
};

export default PokeDetails;
