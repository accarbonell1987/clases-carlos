import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/bowser.css";
import PokeList from "./pokeList";

const PokeBowser = () => {
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [newPokemon, setNewPokemon] = useState({});
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    const newPoke = e.target.value;

    if (newPoke.trim() !== " ") {
      return setPokemon(newPoke);
    }
  };

  const searchPokemon = async (name) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!response.ok) {
      setError(true);
      return;
    }
    const data = await response.json();
    setPokemon("");
    setList([...list, data]);
    setError(false);
    console.log(data);
  };

  return (
    <div className="bowser">
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => handleChange(e)}
        value={pokemon}
      />
      <button
        className="btn-search"
        onClick={() => searchPokemon(pokemon)}
        disabled={pokemon.length <= 3}
      >
        Search
      </button>
      {error && <p>Pokemon no encontrado</p>}
      <div>
        {list.map((poke) => (
          <PokeList
            key={poke.id}
            name={poke.name}
            font={poke.sprites.front_default}
            id={poke.id}
            weight={poke.weight}
            height={poke.height}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeBowser;
