import React from "react";
import "./ChatInputBtn.scss";

const ChatInputBtn = () => {
  return (
    <div>
      <input
        className="chatInputBtn"
        type="text"
        placeholder="Start chatting!"
      />
    </div>
  );
};

export default ChatInputBtn;
