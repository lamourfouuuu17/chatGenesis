export default (state, action) => {
  switch (action.type) {
    case "JOINED":
      return {
        ...state,
        joined: true,
        UserName: action.payload.UserName,
        ChatID: action.payload.ChatID,
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "NEW_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};
