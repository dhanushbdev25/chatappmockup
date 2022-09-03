export const MessageChannel = (message) => {
  return (dispatch) => {
    dispatch({
      type: "addMessage",
      payload: message,
    });
  };
};
