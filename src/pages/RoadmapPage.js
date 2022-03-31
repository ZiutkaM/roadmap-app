import React from "react";

import articleContent from "./article-content";
import {
  Container,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function RoadmapPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ width: "50%", my: 4 }}>
        {articleContent.map((article, key) => (
          <Accordion
            alignItem="center"
            expanded={expanded === `panel${key}`}
            onChange={handleChange(`panel${key}`)}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h5" key={key}>
                {article.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {article.content.map((i) => (
                <FormControlLabel control={<Checkbox />} label={[i]} />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}

export default RoadmapPage;
