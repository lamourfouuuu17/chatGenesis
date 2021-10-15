import React from "react";
import { Container, Row, Col } from "reactstrap";
import ChatInputBtn from "./ChatInputBtn";
import ChatSendBtn from "./ChatSendBtn";
import socket from "../../../socket";
import "./ChatInputBtn.scss";

const ChatInput = ({ UserName, ChatID }) => {
  const [messageValue, setMessageValue] = React.useState("");

  const onSendMessage = () => {
    socket.emit("CHAT:NEW_MESSAGE", {
      UserName,
      ChatID,
      text: messageValue,
    });
  };
  return (
    <div style={{ paddingBottom: "20px" }}>
      <form>
        <Container>
          <Row>
            <Col xl="9" style={{ paddingLeft: "0" }}>
              <div>
                <textarea
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  className="chatInputBtn"
                  type="text"
                  placeholder="Start chatting!"
                ></textarea>
              </div>
            </Col>
            <Col xl="3">
              <div style={{ paddingTop: "15px" }}>
                <ChatSendBtn textSendBtn="Send" onClick={onSendMessage} />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default ChatInput;
