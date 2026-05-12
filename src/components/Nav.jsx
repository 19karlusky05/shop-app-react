import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from './images/logo.png';
import { Link } from "react-router-dom";

function Nav() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <Toolbar>

        {/* LOGO */}
        <img src={logo} alt="logo" width="100px" />

        {isMatch ? (
          <div style={{ marginLeft: "auto" }}>Menu</div>
        ) : (
          <>
            <Tabs sx={{ marginLeft: "auto" }}>

              <Tab label="Home" component={Link} to="/" sx={{ color: "white" }} />
              <Tab label="Products" component={Link} to="/products" sx={{ color: "white" }} />
              <Tab label="About" component={Link} to="/about" sx={{ color: "white" }} />
              <Tab label="Contact" component={Link} to="/contact" sx={{ color: "white" }} />

            </Tabs>

            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Cart
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;