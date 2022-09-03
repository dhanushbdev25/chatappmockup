import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  SwipeableDrawer,
} from "@mui/material";
import quickchartlogo from "./Images/quickchartlogo.png";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Avatar1 from "./Images/Avatar1.png";
import Avatar2 from "./Images/Avatar2.png";
import Avatar3 from "./Images/Avatar3.png";
import Avatar4 from "./Images/Avatar4.png";
import Avatar5 from "./Images/Avatar5.png";
import Avatar6 from "./Images/Avatar6.png";
import ProfileComp from "./Components/ProfileComp";
import ConversationCard from "./Components/ConversationCard";
import ActiveProfile from "./Components/ActiveProfile";
import ProfileStatus from "./Components/ProfileStatus";
import OnBoardClient from "./Components/OnBoardClient";
import ChatBox from "./Components/ChatBox";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";

export default function Mainscreen() {
  const [drawerState, setDrawerState] = useState(false);

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={() => {
        setDrawerState(false);
      }}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={{ padding: "2vh 2%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item lg={2.8} sm={4} style={{ paddingTop: "4%" }}>
                <img src={quickchartlogo} />
              </Grid>
              <Grid item xs={3} style={{ fontWeight: "bold" }}>
                QuickChat
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ProfileComp sideDrawState={setDrawerState} />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ height: "53vh", overflowY: "auto", marginTop: "10px" }}
          >
            <Grid container>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <ConversationCard
                  header="Active Conversations"
                  contacts={[
                    { icon: Avatar2, name: "Henry Boyd" },
                    { icon: Avatar3, name: "Martha Curtus" },
                    { icon: Avatar4, name: "Philipp Tuker" },
                    { icon: Avatar5, name: "Christin Reid" },
                    { icon: Avatar6, name: "Jerry Guzmun" },
                    { icon: Avatar1, name: "Russell Villams" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <ConversationCard
                  header="Archived Conversations"
                  contacts={[
                    { icon: Avatar5, name: "Christin Reid" },
                    { icon: Avatar6, name: "Jerry Guzmun" },
                    { icon: Avatar2, name: "Henry Boyd" },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} style={{ padding: "4px 2%", marginTop: "16px" }}>
        <Paper
          elevation={4}
          variant="outlined"
          style={{
            backgroundColor: "#F3F6FB",
            height: "97vh",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <ChatBox />
        </Paper>
      </Grid>
      <Grid
        item
        xs={3}
        style={{ padding: "0 2%", overflowY: "auto", height: "100vh" }}
      >
        <Grid container spacing={3} style={{ marginTop: "0px" }}>
          <Grid item xs={12}>
            <ActiveProfile />
          </Grid>
          <Grid item xs={12}>
            <ProfileStatus />
          </Grid>
          <Grid item xs={12}>
            <OnBoardClient />
          </Grid>
        </Grid>
      </Grid>
      <SwipeableDrawer
        anchor={"right"}
        open={drawerState}
        onClose={() => {
          setDrawerState(false);
        }}
        onOpen={() => {
          setDrawerState(true);
        }}
      >
        {list()}
      </SwipeableDrawer>
    </Grid>
  );
}
