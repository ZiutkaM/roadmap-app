import React, { useState } from "react";

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

function RoadmapPage({ checked, setChecked }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function checkedChange() {
    setChecked(
      document.querySelectorAll("input[type=checkbox]:checked").length
    );
  }

  return (
    <div>
      <Container maxWidth="md" sx={{ width: "50%", my: 4 }}>
        {articleContent.map((article, key) => (
          <Accordion
            key={key}
            expanded={expanded === `panel${key}`}
            onChange={handleChange(`panel${key}`)}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h5">{article.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {article.content.map((i, key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox checked={checked[i]} onChange={checkedChange} />
                  }
                  label={[i]}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}

export default RoadmapPage;
