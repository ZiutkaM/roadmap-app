import React from "react";
import { Typography, Container } from "@mui/material";

const HomePage = () => (
  <>
    <Container maxWidth="md" sx={{ width: "100%", my: 4 }}>
      <Typography variant="h2" align="center" sx={{ my: 4 }}>
        My front-end roadmap
      </Typography>
      <Typography paragraph="true" align="center">
        This roadmap was created on the basis of the well-known front-end
        roadmap https://roadmap.sh/frontend. This is not and should not be
        treated as the only way of become front-end developer
      </Typography>
      <Typography paragraph="true" align="center">
        This is not and should not be treated as the only way of become
        front-end developer, but rather as a guidlines in learning process. All
        web technology is changing very fast and before you will decide to
        follow this direction, please check with newest aproach.
      </Typography>
      <Typography paragraph="true" align="center">
        It is only a reduced version of it, which I created only for my own
        needs.
      </Typography>
    </Container>
  </>
);

export default HomePage;
