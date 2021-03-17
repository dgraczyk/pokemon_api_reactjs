import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getAllPokemonsRequest } from '../../redux';
import PropTypes from 'prop-types';
import PokemonItem from './PokemonItem'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    display: "flex"    
  },  
});

const PokemonListContainer = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getPokemons()    
  }, [])
  
  return (
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
  loading: PropTypes.bool.isRequired  
}

const mapPropsToState = (state) => {
  return {
    pokemons: state.pokemons.pokemons,
    loading: state.pokemons.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getAllPokemonsRequest())
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(PokemonListContainer)
