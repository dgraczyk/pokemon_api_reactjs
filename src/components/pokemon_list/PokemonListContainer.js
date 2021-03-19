import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getAllPokemonsRequest } from '../../redux';
import PropTypes from 'prop-types';
import PokemonItem from './PokemonItem'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LoadingIndicator from '../LoadingIndicator'


const PokemonListContainer = (props) => { 
  useEffect(() => {
    props.getPokemons(props.generationId)    
  }, [props.generationId])
  
  return (    
    props.loading ?
    <LoadingIndicator/>
    :
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="flex-start">
          {props.pokemons.map((pokemon) => (            
            <PokemonItem key={pokemon.id} pokemon={pokemon}/>
          ))}
      </Grid>
    </Container>
  )
}

PokemonListContainer.propTypes = {
  getPokemons: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,  
  generationId: PropTypes.number
}

PokemonListContainer.defaultProps = {
  generationId: 1
}

const mapPropsToState = (state) => {
  console.log(state)
  return {
    pokemons: state.pokemons.pokemons,
    loading: state.pokemons.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: (generationId) => dispatch(getAllPokemonsRequest(generationId))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(PokemonListContainer)
