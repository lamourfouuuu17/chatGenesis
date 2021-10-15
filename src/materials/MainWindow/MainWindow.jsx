import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../Header/Header";
import ChatMessages from "../Chat/components/ChatMessages";
import ChatSideBar from "../Chat/components/ChatSideBar";

const MainWindow = ({ users, messages }) => {
  return (
    <div>
      <Header></Header>
      <Container style={{ padding: "20px 10px" }}>
        <Row>
          <Col style={{ padding: "0" }}>
            <ChatMessages messages={messages} />
          </Col>
          <Col style={{ padding: "0" }}>
            <ChatSideBar users={users}  />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainWindow;
