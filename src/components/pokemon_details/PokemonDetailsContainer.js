import React from 'react'

const PokemonDetailsContainer = (props) => {
  return (
    <div>
      PokemonDetailsContainer {props.match.params.id}
    </div>
  )
}

export default PokemonDetailsContainer
