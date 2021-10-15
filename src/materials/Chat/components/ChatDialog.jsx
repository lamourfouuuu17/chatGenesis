import React from "react";
import ChatFeedback from "./ChatFeedback";
import ChatUser from "./ChatUser";

const ChatDialog = ({
  chatFeedback,
  chatMessagesFeedback,
  chatTimeFeedback,
  chatUser,
  chatMessagesUser,
  chatTimeUser,
  messages,
}) => {
  return (
    <div style={{ paddingBottom: "200px" }}>
      <ChatFeedback
        chatFeedback={chatFeedback}
        chatMessagesFeedback={chatMessagesFeedback}
        chatTimeFeedback={chatTimeFeedback}
        messages={messages}
      />
      <ChatUser
        chatUser={chatUser}
        chatMessagesUser={chatMessagesUser}
        chatTimeUser={chatTimeUser}
        messages={messages}
      />
    </div>
  );
};

export default ChatDialog;
