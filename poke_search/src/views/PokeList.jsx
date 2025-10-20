import PokeDetails from "../../../../pokemon-bowser/src/component/pokeDetails";

import "../styles/App.css";

function PokeList() {
  const [pokemonList, setPokemonList] = useState([])

  const handleOnChangePokemonList = (newList) => {
    setPokemonList(newList)
  }

  return (
    <div>
      <PokeDetails />
    </div>
  );
}

export default PokeList;
