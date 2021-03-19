import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getPokemonsDetailsRequest } from '../../redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LoadingIndicator from '../LoadingIndicator'
import PokemonType from './PokemonType'
import PokemonStat from './PokemonStat'

const useStyles = makeStyles({
  media: {
    width: "auto"    
  },
  margin: {
    margin: '20px'
  },
  pokemonName: {
    textTransform: 'capitalize'
  }
});

function PokemonDetailsContainer(props) {
  const classes = useStyles();

  useEffect(() => {    
    props.getPokemonDetails(props.match.params.id)    
  }, [])

  return (    
    props.loading ?
    <LoadingIndicator/>
    :
    <Container maxWidth="md">
      <Grid>
        <Grid item className={classes.margin}>
          <img src={props.pokemon.img} alt={props.pokemon.name}/>
          <Typography className={classes.pokemonName} component="h1" variant="h3" align="center" gutterBottom>
              {props.pokemon.name}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Typography className={classes.margin} variant="button">
              <strong>Height&nbsp;</strong>{props.pokemon.height / 10} m
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.margin} variant="button">
                <strong>Weight&nbsp;</strong>{props.pokemon.weight / 10} kg
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">        
        {props.pokemon.types.map((t) => (
          <PokemonType key={t.name} name={t.name}/>
        ))}
      </Grid>
      {props.pokemon.stats.map((s) => (
          <PokemonStat key={s.name} name={s.name} value={s.stat}/>
        ))}
    </Container>    
  );
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
    }))
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
