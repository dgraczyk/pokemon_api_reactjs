import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f75252'    
  }
});

function NavBarContainer () {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} position="relative">
        <Toolbar>
          <img width="120" height="80" src={process.env.PUBLIC_URL + '/pokemon_logo.svg'} alt="logo" />
        </Toolbar>
    </AppBar>
  )
}

export default NavBarContainer