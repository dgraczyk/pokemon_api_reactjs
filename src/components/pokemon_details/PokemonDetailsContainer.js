import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getPokemonsDetailsRequest } from '../../redux';
import PropTypes from 'prop-types';

const PokemonDetailsContainer = (props) => {
  
  useEffect(() => {
    props.getPokemonDetails(props.match.params.id)    
  }, [])

  return (
    <div>
      PokemonDetailsContainer {props.match.params.id}
      {props.pokemon.name}
    </div>
  )
}

PokemonDetailsContainer.propTypes = {
  getPokemonDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    stats: PropTypes.arrayOf(PropTypes.shape({
      stat: PropTypes.number,
      name: PropTypes.string
    })),
    types: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
  })
}

const mapPropsToState = (state) => {
  return {
    pokemon: state.pokemonDetails.pokemon,
    loading: state.pokemonDetails.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetails: (name) => dispatch(getPokemonsDetailsRequest(name))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(PokemonDetailsContainer)
