import React from "react";
import ChatHeader from "./ChatHeader";
import ChatDialog from "./ChatDialog";
import patrick from "../../../images/patrick.jpg";
import ChatInput from "./ChatInput";

const ChatMessages = ({ messages }) => {
  return (
    <div style={{ backgroundColor: "#d7dfe7", width: "882px" }}>
      <ChatHeader
        chatHeader="ReverseBot"
        chatParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur."
        chatImg={patrick}
      />
      <ChatDialog
        chatFeedback="Reverse Bot"
        chatMessagesFeedback="Hello World!"
        chatTimeFeedback="4:20 PM"
        chatUser="Reverse Bot"
        chatMessagesUser="Hello World!"
        chatTimeUser="4:20 PM"
        messages={messages}
      />
      <ChatInput />
    </div>
  );
};

export default ChatMessages;
