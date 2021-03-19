import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

// Function to normalise the values (MIN / MAX could be integrated)
const MIN = 0;
const MAX = 255;
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

const selectColor = (name, theme) => {
  switch (name) {
    case "hp":
      return theme.palette.secondary.light;
    case "attack":
      return theme.palette.info.light;
    case "defense":
      return theme.palette.success.light;
    case "special-attack":
      return theme.palette.info.dark;
    case "special-defense":
      return theme.palette.success.dark;
    default:
      return theme.palette.warning.light;
  }
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: 10,
      borderRadius: 8,
      marginTop: 6,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[200],
    },
    bar: (props) => ({
      borderRadius: 5,
      backgroundColor: selectColor(props.name, theme),
    }),
    box: {
      textAlign: "left",
      margin: 8,
    },
  };
});

const PokemonStat = (props) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.box}>
      <strong>{props.name}</strong>
      <LinearProgress
        classes={{
          root: classes.root,
          colorPrimary: classes.colorPrimary,
          bar: classes.bar,
        }}
        variant="determinate"
        value={normalise(props.value)}
      />
    </Box>
  );
};

PokemonStat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default PokemonStat;
