import { Avatar, Grid, Paper, styled, Switch } from "@mui/material";
import Avatar1 from "../Images/Avatar7.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function ProfileComp(props: any) {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
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
        <Grid item lg={4.5} sm={7}>
          <Avatar
            alt="Remy Sharp"
            src={Avatar1}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item lg={5} sm={9} style={{ fontWeight: "bold" }}>
              Bill Bradford
            </Grid>
            <Grid
              item
              lg={1}
              sm={2}
              style={{ paddingTop: "0.5%" }}
              onClick={() => {
                props.sideDrawState(true);
              }}
            >
              <SettingsOutlinedIcon fontSize="small" />
            </Grid>
          </Grid>
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
          Lead UX/UI Designer
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "2%", paddingRight: "10%" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={2} sm={4} style={{ paddingTop: "0.5%" }}>
              <AntSwitch defaultChecked />
            </Grid>
            <Grid item lg={1} style={{ fontSize: "smaller", fontWeight: 500 }}>
              Active
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
