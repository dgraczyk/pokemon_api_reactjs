import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    "min-width": 100,
    "lineHeight": 2,
    "fontSize" : '2em',
    "fontWeight": 800,
    "margin" : 5 
  },
}));

const GenerationCard = props => {
  const classes = useStyles();

  return (
    <Button 
      className={classes.root}
      variant="outlined" 
      size="large" 
      color="primary">
      {props.generation}
    </Button>
  )
}

GenerationCard.propTypes = {
  generation: PropTypes.string.isRequired
}

export default GenerationCard
