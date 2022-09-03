import { Avatar, Button, Grid, Paper } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import clock from "../Images/clock.png";
import Attends from "../Images/Attends.png";
import Meeting from "../Images/Meeting.png";
import Error from "../Images/Error.png";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer } from "recharts";
export default function ProfileComp() {
  const chartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <Paper
      variant="outlined"
      elevation={4}
      style={{ textAlign: "center", backgroundColor: "#F3F6FB" }}
    >
      <Grid
        container
        spacing={2}
        style={{ padding: "3.5%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={5} sm={12} wrap="nowrap">
          <Paper elevation={4} style={{ backgroundColor: "#cbe6f7" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              style={{ padding: "4%" }}
            >
              <Grid item lg={5} sm={1}>
                <Avatar src={clock} sx={{ width: 24, height: 24 }} />
              </Grid>
              <Grid item lg={5} sm={11} wrap="nowrap">
                <span
                  style={{
                    fontSize: "small",
                    color: "#1649F0",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  13h
                </span>{" "}
                <span style={{ fontSize: "11px", color: "#7d8597" }}>Time</span>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={5} sm={12} wrap="nowrap">
          <Paper elevation={4} style={{ backgroundColor: "#ccd1b0" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              style={{ padding: "4%" }}
            >
              <Grid item lg={5} sm={1} wrap="nowrap">
                <Avatar src={Attends} sx={{ width: 24, height: 24 }} />
              </Grid>
              <Grid item lg={5} sm={11} wrap="nowrap">
                <span
                  style={{
                    fontSize: "small",
                    color: "#767d4f",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  118
                </span>{" "}
                <span style={{ fontSize: "11px", color: "#7d8597" }}>
                  Attendeed
                </span>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={5} sm={12}>
          <Paper elevation={4} style={{ backgroundColor: "#cfc3d6" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              style={{ padding: "4%" }}
            >
              <Grid item lg={5} sm={1}>
                <Avatar src={Meeting} sx={{ width: 24, height: 24 }} />
              </Grid>
              <Grid item lg={5} sm={11} wrap="nowrap">
                <span
                  style={{
                    fontSize: "small",
                    color: "#e6ddeb",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  199
                </span>{" "}
                <span style={{ fontSize: "11px", color: "#7d8597" }}>
                  Meetings
                </span>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={5} sm={12}>
          <Paper elevation={4} style={{ backgroundColor: "#f59e98" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              style={{ padding: "4%" }}
            >
              <Grid item lg={5} sm={1}>
                <Avatar src={Error} sx={{ width: 24, height: 24 }} />
              </Grid>
              <Grid item lg={5} sm={11}>
                <span
                  style={{
                    fontSize: "small",
                    color: "#D52B1E",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  41
                </span>{" "}
                <span style={{ fontSize: "11px", color: "#7d8597" }}>
                  Rejected
                </span>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          Current Week
        </Grid>
        <Grid
          item
          xs={5}
          style={{ color: "#979dac", fontSize: "12px", textAlign: "right" }}
        >
          Activity
        </Grid>
        <Grid item xs={12} style={{ height: "100px", width: "100px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={chartData}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}
