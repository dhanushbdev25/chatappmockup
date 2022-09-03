import {
  Avatar,
  Badge,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  styled,
} from "@mui/material";
import Attachment from "../Images/Attachment1.png";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Avatar7 from "../Images/Avatar7.png";
import Avatar6 from "../Images/Avatar6.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../StateManagement/Index";

const StyledOnlineBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const StyledOfflineBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#32343b",
    color: "#32343b",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

function ChatBox(props: any) {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch<any>();
  const [chatData, setChatData] = useState<any>();
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (state) setChatData(state.message);
  });

  return (
    <Grid container spacing={1} style={{ padding: "2%" }}>
      <Grid
        item
        xs={12}
        style={{
          height: "98vh",
          overflowY: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Grid container spacing={2}>
          {chatData?.messages.map((element: any) => {
            return (
              <Grid
                item
                xs={12}
                style={
                  element.type === "receiver"
                    ? { textAlign: "right", flexBasis: "95%" }
                    : { textAlign: "left", flexBasis: "95%" }
                }
              >
                {element.type === "receiver" ? (
                  <Grid
                    container
                    justifyContent={"flex-end"}
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item xs={8}>
                      <Paper
                        elevation={4}
                        style={{
                          padding: "2%",
                          wordWrap: "break-word",
                          backgroundColor: "#2c3a5c",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          display: "inline-block",
                        }}
                      >
                        {element.message}
                      </Paper>
                    </Grid>
                    <Grid item sm={2} lg={1}>
                      {chatData.receiverStatus === "online" ? (
                        <StyledOnlineBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar src={Avatar7} />
                        </StyledOnlineBadge>
                      ) : (
                        <StyledOfflineBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar src={Avatar7} />
                        </StyledOfflineBadge>
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    container
                    justifyContent={"flex-start"}
                    alignItems="center"
                  >
                    <Grid item sm={2} lg={1}>
                      {chatData.senderStatus === "online" ? (
                        <StyledOnlineBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar src={Avatar6} />
                        </StyledOnlineBadge>
                      ) : (
                        <StyledOfflineBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar src={Avatar6} />
                        </StyledOfflineBadge>
                      )}
                    </Grid>
                    <Grid item xs={8}>
                      <Paper
                        elevation={4}
                        style={{
                          padding: "2%",
                          wordWrap: "break-word",
                          backgroundColor: "#FFFFFF",
                          color: "#2c3a5c",
                          fontSize: "14px",
                          width: "fit-content",
                        }}
                      >
                        {element.message}
                      </Paper>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={4}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            style={{ padding: "2%" }}
          >
            <Grid
              item
              lg={0.6}
              sm={0.6}
              style={{ paddingTop: "1.7%", cursor: "pointer" }}
            >
              <img src={Attachment} style={{ height: "19px", width: "20px" }} />
            </Grid>
            <Grid item lg={8} sm={8}>
              <OutlinedInput
                type={"text"}
                size="small"
                style={{ width: "100%" }}
                multiline
                maxRows={2}
                value={newMessage}
                onChange={(e: any) => {
                  setNewMessage(e.target.value);
                }}
                onKeyDown={(e: any) => {
                  if (e.keyCode === 13) {
                    dispatch(Actions.MessageChannel(e.target.value));
                    setNewMessage("");
                  }
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <SentimentSatisfiedAltIcon
                      style={{ color: "#D1C77A", cursor: "pointer" }}
                    />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item lg={2} sm={3}>
              <Button
                variant="contained"
                size="medium"
                endIcon={<SendIcon />}
                onClick={() => {
                  dispatch(Actions.MessageChannel(newMessage));
                  setNewMessage("");
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ChatBox;
