import React, {useEffect} from 'react';
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const generations = [
  {id: 1, name: 'Generation I'},
  {id: 2, name: 'Generation II'},
  {id: 3, name: 'Generation III'},
  {id: 4, name: 'Generation IV'},
  {id: 5, name: 'Generation V'} 
];

const PokemonGenerationSelector = props => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if(props.generationId > 0 && props.generationId < 6){
      setSelectedIndex(props.generationId - 1)
    }
  }, [props.generationId])

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    
      <Grid container direction="column" alignItems="center" bgcolor="error.main">
        <Grid item xs={12}>
          <ButtonGroup variant="contained" color="primary" size="large" ref={anchorRef}>
            <Button href={`/pokemons/generations/${generations[selectedIndex].id}/`}>{generations[selectedIndex].name}</Button>
            <Button
              color="primary"
              size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="menu"
              onClick={handleToggle}
            >
            <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper style={{zIndex: 999}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{                  
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {generations.map((option, index) => (
                        <MenuItem
                          key={option.id}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    
  );
}

PokemonGenerationSelector.propTypes  = {
  generetionId: PropTypes.number
}

export default PokemonGenerationSelector