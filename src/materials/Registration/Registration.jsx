import React from "react";
import socket from "../../socket";
import axios from "axios";

const Registration = ({ onLogin }) => {
  const [ChatID, setChatID] = React.useState("");
  const [UserName, setUserName] = React.useState("");
  const [Loading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!ChatID || !UserName) {
      return alert("Неверные данные!");
    }
    const obj = { ChatID, UserName };
    setLoading(true);
    await axios.post("/chats", { ChatID, UserName });
    onLogin(obj);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your chat ID"
        value={ChatID}
        style={{
          display: "block",
          margin: "0 auto",
          marginBottom: "20px",
          marginTop: "200px",
        }}
        onChange={(e) => setChatID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your name"
        value={UserName}
        style={{ display: "block", margin: "0 auto", marginBottom: "20px" }}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        style={{ display: "block", margin: "0 auto", marginBottom: "20px" }}
        onClick={onEnter}
        disabled={Loading}
      >
        {Loading ? "LOADING..." : "ENTER"}
      </button>
    </div>
  );
};

export default Registration;
