import React from "react";
import "./ChatFeedback.scss";

const ChatFeedback = ({
  chatFeedback,
  chatMessagesFeedback,
  chatTimeFeedback,
}) => {
  return (
    <div className="chatFeedback">
      <div className="chatFeedback_upper">
        <h4 className="chatFeedback__name">
          {chatFeedback}
          <span className="chatFeedback__time">{chatTimeFeedback}</span>
        </h4>
      </div>
      <div className="chatFeedback_lower">
        <div className="chatFeedback__triangle"></div>
        <p className="chatFeedback__message">{chatMessagesFeedback}</p>
      </div>
    </div>
  );
};

export default ChatFeedback;
