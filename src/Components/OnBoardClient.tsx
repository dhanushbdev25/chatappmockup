import { Avatar, Button, Grid, Paper } from "@mui/material";
import Kite from "../Images/Kite.png";
import LinkIcon from "@mui/icons-material/Link";
export default function ProfileComp() {
  return (
    <Paper
      variant="outlined"
      elevation={4}
      style={{ textAlign: "center", backgroundColor: "#F3F6FB" }}
    >
      <Grid
        container
        spacing={1}
        style={{ padding: "1.5%" }}
        justifyContent="center"
        alignItems="center"
      >
        <img src={Kite} style={{ width: "100px", height: "100px" }} />
        <Grid item xs={12} style={{ fontWeight: "bold" }}>
          OnBoard Clients
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            fontSize: "small",
            fontWeight: 500,
            color: "#979dac",
          }}
        >
          Share the link with prospects <br /> and discuss all stuff.
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#0E4BFC" }}
            size="medium"
            endIcon={<LinkIcon />}
          >
            Copy Link
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
