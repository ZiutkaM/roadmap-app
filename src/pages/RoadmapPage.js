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

  const checkedChange = (e) => {
    setChecked(!checked);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ width: "50%", my: 4 }}>
        {articleContent.map((article, key) => (
          <Accordion
            key={article.id}
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
              {article.content.map((text, key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      id={`${article.id}.${key}`}
                      checked={checked[text]}
                      onChange={(e) => {
                        localStorage.setItem(
                          e.target.id,
                          `${e.target.checked}`
                        );
                        checkedChange(e.target.checked);
                      }}
                    />
                  }
                  label={[text]}
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
