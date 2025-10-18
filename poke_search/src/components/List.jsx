
const List = ({ pokemonList }) => {
  // const navigate = useNavigate();

  // const handleDetailClick = (id) => {
  //   navigate(`/pokemon/details/${id}`);
  // }

  if (!pokemonList || pokemonList.length === 0) {
    return <p>No hay pokémons para mostrar</p>;
  }

  return (
    <div>
      {pokemonList?.map(p => {
        return <div key={p.id}>{p.name}</div>
      })}
    </div>
  )
}

export default List
