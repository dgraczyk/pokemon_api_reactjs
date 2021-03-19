import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PokemonGenerationSelector from './PokemonGenerationSelector'
import PokemonListContainer from '../pokemon_list/PokemonListContainer'

const PokemonGenerationContainer = (props) => {
  return (
    <div>
      <img style={{margin: "-60px"}} src={process.env.PUBLIC_URL + '/pokemon_logo.svg'} alt="logo" />
      <PokemonGenerationSelector generationId={props.match.params.id}/>
      <div style={{margin: "50px"}}>
        <PokemonListContainer generationId={props.match.params.id}/>
      </div>
    </div>
  )
}

PokemonGenerationContainer.propTypes = {
  props: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGenerationContainer)
