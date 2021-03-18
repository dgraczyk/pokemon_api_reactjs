import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

const selectColor = (name,theme) => {    
  switch (name) {
    case "normal":
      return '#d7ccc8';
    case "fire":
      return theme.palette.warning.dark;
    case "fighting":
      return '#ff8a65';
    case "water":
      return theme.palette.info.main;
    case "flying":
      return theme.palette.info.light;
    case "grass":
      return theme.palette.success.main;
    case "poison":
      return theme.palette.secondary.dark;
    case "electric":
      return theme.palette.warning.light;
    case "ground":
      return '#795548';
    case "psychic":
      return theme.palette.secondary.light;
    case "rock":
      return '#616161';
    case "ice":
      return '#e1f5fe';
    case "bug":
      return theme.palette.success.light;
    case "dragon":
      return '#7986cb';
    case "ghost":
      return theme.palette.success.dark;
    case "dark":
      return '#424242';
    case "steel":
      return '#78909c';
    case "fairy":
      return '#f8bbd0';
    default:
      return '#37474f';
  }  
}

const useStyles = makeStyles((theme) => ({  
  root: props => ({
    border: selectColor(props.name, theme),
    background: selectColor(props.name, theme),
    borderRadius: '30px',     
    borderStyle: 'solid',    
    width: '100px',
    margin: '5px'
  }),
  text: {
    color: 'white'
  }
}));


const PokemonType = props => {
  const classes = useStyles(props);
  return (
    <Box className={classes.root}>
       <Typography className={classes.text} variant="overline" display="block">
        {props.name}
      </Typography>
    </Box>
  )
}

PokemonType.propTypes = {
  name: PropTypes.string.isRequired
}

export default PokemonType
