import { useState } from "react";
import "../styles/browser.css";
import PokeList from "./pokeList";

const PokeBrowser = ({ listOfPokes, handleOnChangeList }) => {
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const newPoke = e.target.value;

    if (newPoke.trim() !== " ") {
      return setPokemon(newPoke);
    }
  };

  const searchPokemon = async (name) => {
    if (!name || name.trim().length < 3) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      if (!response.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      const data = await response.json();

      // Check if Pokemon is already in the list
      const isAlreadyAdded = listOfPokes.some(poke => poke.id === data.id);
      if (!isAlreadyAdded) {
        handleOnChangeList([...listOfPokes, data]);
      }

      setPokemon("");
      setError(false);
      console.log(data);
    } catch (err) {
      setError(true);
      console.error("Error fetching Pokemon:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="app-title">PokéBrowser</h1>
      <div className="browser">
        <div className="input-button-container">
          <input
            type="text"
            placeholder="Search for a Pokémon..."
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                searchPokemon(pokemon)
              }
            }}
            value={pokemon}
          />
          <button
            className="btn-search"
            onClick={() => searchPokemon(pokemon)}
            disabled={pokemon.length < 3 || loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {error && (
          <div className="error-message">
            Pokémon not found! Please try again with a different name.
          </div>
        )}
        <div>
          {listOfPokes.map((poke) => (
            <PokeList
              key={poke.id}
              pokemon={poke}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokeBrowser;
