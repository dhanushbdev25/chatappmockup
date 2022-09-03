const reducer = (
  initState = {
    sender: "Hernández MuiBadge",
    receiver: "Martha Suite",
    senderStatus: "offline",
    receiverStatus: "online",
    senderAvatar: "Avatar7",
    receiverAvatar: "Avatar6",
    messages: [
      {
        type: "sender",
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elitim veniam,
                quis nostrud exercitation ule dolor in.`,
      },
      {
        type: "sender",
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elitim veniam,
                quis nostrud exercitation ule dolor in.`,
      },
      {
        type: "receiver",
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elitim veniam,
                quis nostrud exercitation ule dolor in.`,
      },
      {
        type: "sender",
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elitim veniam,
                quis nostrud exercitation ule dolor in.`,
      },
    ],
  },
  action
) => {
  if (action.type === "addMessage") {
    const data = initState;
    const message = data.messages;
    message.push({
      type: "receiver",
      message: action.payload,
    });
    return data;
  } else return initState;
};

export default reducer;
