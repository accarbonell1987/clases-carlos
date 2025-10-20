import { useNavigate } from "react-router-dom";
import "../styles/pokeList.css";

const PokeList = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/poke/details/${id}`, { state: pokemon });
  };

  const pokeName = pokemon.name;
  const pokeMainImage = pokemon.sprites.front_default;
  const pokeId = pokemon.id;
  const pokeTypes = pokemon.types;

  const formatId = (id) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  return (
    <div>
      <ul className="poke-ul">
        <li className="poke-li">
          <img src={pokeMainImage} alt={pokeName} />
          <span className="poke-name">{pokeName}</span>
          <div className="poke-types">
            {pokeTypes.map((typeInfo, index) => (
              <span
                key={index}
                className={`type-badge type-${typeInfo.type.name}`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
          <span className="poke-id">{formatId(pokeId)}</span>
          <button className="btn" onClick={() => handleView(pokeId)}>
            View Details
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PokeList;
