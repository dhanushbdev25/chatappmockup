import { Avatar, Button, Grid, Paper } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
export default function ProfileComp() {
  return (
    <Paper
      variant="outlined"
      elevation={4}
      style={{ textAlign: "center", backgroundColor: "#F3F6FB" }}
    >
      <Grid
        container
        style={{ padding: "7%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4.5} style={{ paddingBottom: "2%" }}>
          <Avatar
            sx={{
              background:
                "linear-gradient(to right top, #88a1d6, #88a2d9, #88a3dc, #87a5e0, #87a6e3, #86a7e6, #85a8ea, #84a9ed, #82aaf1, #80abf6, #7eabfa, #7cacff)",
              width: 75,
              height: 75,
            }}
          >
            <span style={{ color: "black", fontWeight: "bold" }}>HB</span>
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item lg={2} sm={3} style={{ paddingTop: "0.5%" }}>
              <EmailOutlinedIcon fontSize="small" />
            </Grid>
            <Grid
              item
              lg={8}
              sm={8}
              style={{
                fontSize: "small",
                fontWeight: 500,
                color: "#7d8597",
                textAlign: "left",
                wordBreak: "break-all",
              }}
            >
              henryBourad@email.com
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item lg={2} sm={3} style={{ paddingTop: "0.5%" }}>
              <AccountCircleOutlinedIcon fontSize="small" />
            </Grid>
            <Grid
              item
              lg={10}
              sm={8}
              style={{
                fontSize: "small",
                fontWeight: 500,
                color: "#7d8597",
                textAlign: "left",
              }}
            >
              Henry Bourad
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ paddingTop: "3%", paddingRight: "10%" }}>
          <Button
            variant="outlined"
            style={{ background: "white", fontSize: "small" }}
            endIcon={<ArchiveOutlinedIcon fontSize="small" color="primary" />}
          >
            Archive
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
