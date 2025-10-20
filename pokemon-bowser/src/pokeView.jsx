import { useState } from "react";
import PokeBowser from "./component/pokeBowser";
import "./styles/App.css";

function PokeView() {
  return (
    <div className="bowser">
      <PokeBowser />
    </div>
  );
}

export default PokeView;
