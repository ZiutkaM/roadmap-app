import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Rating, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

const NavBar = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="relative">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/" sx={{ my: 2, color: "white" }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ my: 2, color: "white" }}>
            About
          </Button>
          <Button component={Link} to="/roadmap" sx={{ my: 2, color: "white" }}>
            Roadmap
          </Button>
        </Box>
        <Rating name="read-only" value={2} readOnly />
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default NavBar;
