import React from "react";
import MainWindow from "./materials/MainWindow/MainWindow";
// import socket from "./socket";
import axios from "axios";
import reducer from "./reducer";
import Registration from "./materials/Registration/Registration";
import { io } from "socket.io-client";

const socket = io();

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    ChatID: null,
    UserName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("CHAT:JOIN", obj);
    const { data } = await axios.get(`/chats/${obj.ChatID}`);
    setUsers(data.users);
  };

  window.socket = socket;

  const setUsers = (users) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  React.useEffect(() => {
    socket.on("CHAT:SET_USERS", setUsers);
    socket.on("CHAT:NEW_MESSAGE", (message) => {
      dispatch({ type: "NEW_MESSAGE", payload: message });
    });
  }, []);

  return (
    <div className="App">
      {!state.joined ? (
        <Registration onLogin={onLogin} />
      ) : (
        <MainWindow {...state} />
      )}
    </div>
  );
}

export default App;
