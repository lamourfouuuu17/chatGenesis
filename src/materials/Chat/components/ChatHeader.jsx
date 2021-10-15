import React from "react";
import { Container, Row, Col } from "reactstrap";

const ChatHeader = ({ chatHeader, chatParagraph, chatImg }) => {
  return (
    <Container
      style={{
        backgroundColor: "#becbd9",
        color: "black",
        padding: "0px",
      }}
    >
      <Row>
        <Col xl="3">
          <img src={chatImg} alt="patrick" style={{ height: "170px" }} />
        </Col>
        <Col xl="9">
          <div style={{ padding: "18px 6px 0px 0px" }}>
            <h3 style={{ fontSize: "23px", fontWeight: "600" }}>
              {chatHeader}
            </h3>
            <p style={{ fontSize: "13px" }}>{chatParagraph}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatHeader;
