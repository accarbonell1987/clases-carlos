import { useLocation, useNavigate } from "react-router-dom";
import "../styles/poke-detail.css";

const PokeDetails = () => {
  const navigate = useNavigate();
  const data = useLocation();

  const handleBack = () => {
    navigate("/");
  };

  const pokemon = data?.state;
  if (!pokemon) {
    return (
      <div className="poke-detail-container">
        <h1 className="pokemon-title">No Pokemon Data Found</h1>
        <button className="btn" onClick={handleBack}>
          Back to Search
        </button>
      </div>
    );
  }

  const formatId = (id) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  const formatStat = (statName) => {
    return statName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="poke-detail-container">
      <h1 className="pokemon-title">{pokemon.name}</h1>
      <div className="pokemon-id-badge">{formatId(pokemon.id)}</div>

      <div className="poke-details-info">
        <div style={{ flex: 1 }}>
          <ul>
            <li>
              <strong>Name:</strong>
              <span style={{ textTransform: 'capitalize' }}>{pokemon.name}</span>
            </li>
            <li>
              <strong>Weight:</strong>
              <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
            </li>
            <li>
              <strong>Height:</strong>
              <span>{(pokemon.height / 10).toFixed(1)} m</span>
            </li>
            <li>
              <strong>Base Experience:</strong>
              <span>{pokemon.base_experience}</span>
            </li>
            <li>
              <strong>Types:</strong>
              <div className="poke-types" style={{ marginTop: '8px' }}>
                {pokemon.types.map((typeInfo, index) => (
                  <span
                    key={index}
                    className={`type-badge type-${typeInfo.type.name}`}
                  >
                    {typeInfo.type.name}
                  </span>
                ))}
              </div>
            </li>
            <li>
              <strong>Abilities:</strong>
              <span style={{ textTransform: 'capitalize' }}>
                {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
              </span>
            </li>
          </ul>

          {/* Stats Section */}
          <div className="stats-container">
            {pokemon.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-name">{formatStat(stat.stat.name)}</div>
                <div className="stat-value">{stat.base_stat}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="poke-details-info-images-container">
          <img
            src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
            className="main-img"
            alt={`${pokemon.name} official artwork`}
          />
          <div className="poke-details-info-images-secondary-container">
            {pokemon.sprites.front_default && (
              <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front`} />
            )}
            {pokemon.sprites.back_default && (
              <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} />
            )}
            {pokemon.sprites.other?.dream_world?.front_default && (
              <img src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} dream world`} />
            )}
            {pokemon.sprites.other?.home?.front_default && (
              <img src={pokemon.sprites.other.home.front_default} alt={`${pokemon.name} home`} />
            )}
          </div>
        </div>
      </div>

      <div className="poke-detail-buttons">
        <button className="btn" onClick={handleBack}>
          ← Back to Search
        </button>
        <button className="btn">
          ⭐ Add to Favorites
        </button>
        <button className="btn">
          🖼️ View Gallery
        </button>
      </div>
    </div>
  );
};

export default PokeDetails;
