import { useState } from 'react'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import '../styles/App.css'

function PokeList() {
  const [pokemonList, setPokemonList] = useState([])

  const handleOnChangePokemonList = (newList) => {
    setPokemonList(newList)
  }

  return (
    <div>
      <SearchBar handleOnChangePokemonList={handleOnChangePokemonList} />
      <List pokemonList={pokemonList} />
    </div>
  )
}

export default PokeList
