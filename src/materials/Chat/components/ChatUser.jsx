import React from "react";
import "./ChatUser.scss";

const ChatUser = ({ chatUser, chatMessagesUser, chatTimeUser, messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div className="chatUser">
          <div
            className="chatUser_upper"
            style={{ backgroundColor: "#f0cbb3 !important" }}
          >
            <h4 className="chatUser__name">
              {messages.ChatUser}{" "}
              <span className="chatUser__time">{chatTimeUser}</span>
            </h4>
          </div>
          <div className="chatUser_lower">
            <div className="chatUser__triangle"></div>
            <p className="chatUser__message">{messages.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatUser;
