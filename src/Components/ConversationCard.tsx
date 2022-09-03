import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ConversationCard({ header, contacts }: any) {
  const [clickedContact, setClickedContact] = useState(0);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        style={{ fontWeight: "bold" }}
      >
        <Grid container>
          <Grid item xs={10}>
            {header}
          </Grid>
          <Grid item xs={1} className="dot">
            {contacts.length}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {contacts.map((element: any, index: number) => {
            return (
              <Grid
                item
                xs={12}
                onClick={() => {
                  setClickedContact(index);
                }}
              >
                <Paper
                  elevation={0}
                  style={
                    index === clickedContact
                      ? {
                          cursor: "pointer",
                          backgroundColor: "#F3F6FB",
                          padding: "2%",
                        }
                      : { cursor: "pointer", padding: "2%" }
                  }
                >
                  <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                    // spacing={0.5}
                  >
                    <Grid item xs={3}>
                      <Avatar
                        sx={{ width: 44, height: 44 }}
                        alt={element.name}
                        src={element.icon}
                      />
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={9}
                      sm={12}
                      style={{ color: "#696969" }}
                    >
                      {element.name}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
