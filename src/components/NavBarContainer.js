import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function NavBarContainer() {
  return (
    <AppBar color="primary" position="relative">
      <Toolbar>
        <img
          width="120"
          height="80"
          src={process.env.PUBLIC_URL + "/pokemon_logo.svg"}
          alt="logo"
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarContainer;
