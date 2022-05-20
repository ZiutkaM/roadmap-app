import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Rating, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

function NavBar({ checked }) {
  const rating = useRef(0);

  rating.current =
    (document.querySelectorAll("input[type=checkbox]:checked").length /
      document.querySelectorAll("input[type=checkbox]").length) *
    5;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button component={Link} to="/" sx={{ my: 2, color: "white" }}>
              Home
            </Button>

            <Button
              component={Link}
              to="/roadmap"
              sx={{ my: 2, color: "white" }}
            >
              Roadmap
            </Button>
          </Box>
          <Rating
            name="read-only"
            value={rating.current}
            precision={0.5}
            readOnly
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
