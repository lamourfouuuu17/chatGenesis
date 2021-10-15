import React from "react";
import { Container, Row, Col } from "reactstrap";
import ChatSideBarBtn from "./ChatSideBarBtn";
import "./ChatSideBarBtn.scss";
import ChatSideBarUser from "./ChatSideBarUser";

const ChatSideBar = ({ users, messages }) => {
  return (
    <div style={{ backgroundColor: "#fff", width: "262px" }}>
      <Container style={{ padding: "0" }}>
        <Row style={{ paddingLeft: "12px", width: "280px", marginRight: "0" }}>
          <Col xl="6" style={{ padding: "0" }}>
            <div>
              <ChatSideBarBtn sideBarTextBtn="Online" />
            </div>
          </Col>
          <Col xl="6" style={{ padding: "0" }}>
            <div>
              <ChatSideBarBtn sideBarTextBtn="All" />
            </div>
          </Col>
        </Row>
      </Container>

      <ChatSideBarUser users={users} messages={messages} />
    </div>
  );
};

export default ChatSideBar;
