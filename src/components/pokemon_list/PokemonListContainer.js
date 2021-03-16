import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonListContainer = (props) => {
  const pokemon = {
    id: 1,
    name: "bulbasaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    types: [
      {name: "grass"},
      {name: "poison"},
    ]
  }
  
  return (
    <div>
      <PokemonItem pokemon={pokemon}/>
    </div>
  )
}

export default PokemonListContainer
