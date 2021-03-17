import React from 'react'
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
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="flex-start">
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
        <PokemonItem pokemon={pokemon}/>
      </Grid>
    </Container>
  )
}

export default PokemonListContainer
