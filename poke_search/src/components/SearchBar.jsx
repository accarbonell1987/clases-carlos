import { useState } from 'react'
import '../styles/search.css'

const SearchBar = ({ handleOnChangePokemonList }) => {
  const [searchCriteria, setSearchCriteria] = useState('')

  const handleOnChange = (event) => {
    setSearchCriteria(event.target.value)
  }

  const handleOnClick = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchCriteria.toLowerCase()}`)
      const data = await response.json()
      handleOnChangePokemonList([data])
    } catch (error) {
      console.error("Error fetching Pokémon data:", error)
    }
  }

  const isSearchCriteriaValid = searchCriteria.trim().length >= 3

  return (
    <div className="poke-search-bar">
      <input type="text" placeholder="Search Pokémon..." value={searchCriteria} onChange={handleOnChange} />
      <button disabled={!isSearchCriteriaValid} onClick={handleOnClick}>Search</button>
    </div>
  )
}

export default SearchBar
