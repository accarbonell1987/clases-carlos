import { useParams } from "react-router";

const PokeDetails = () => {
  const params = useParams();
  console.log("🚀 ~ PokeDetails ~ params:", params)

  return (
    <div>
      <h1>Detalle del Pokémon {params.id}</h1>
    </div>
  )
}

export default PokeDetails
