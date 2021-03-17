import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 180,
    margin: "10px"
  },
  img: {
    objectFit: "fill"
  }
});

const PokemonItem = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.img}
          component="img"
          height="150"
          alt={props.pokemon.name}
          image={props.pokemon.img}
          title={props.pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" text="center">
            {props.pokemon.name}
          </Typography>          
        </CardContent>
      </CardActionArea>      
    </Card>
  )
}

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
}

export default PokemonItem
