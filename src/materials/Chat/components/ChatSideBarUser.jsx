import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ChatSideBarUser.scss";
import userPhoto from "../../../images/userPhoto.png";

const ChatSideBarUser = ({ users, messages }) => {
  return (
    <div>
      {users.map((name, index) => (
        <div className="sideBarUser">
          <Container style={{ padding: "0" }}>
            <Row style={{ padding: "5px 15px" }}>
              <Col xl="4">
                <div className="sideBarUserDiv">
                  <img src={userPhoto} alt="userPhoto" className="userPhoto" />
                  <div className="sideBarUserCircle"></div>
                </div>
              </Col>
              <Col xl="8" style={{ padding: "0" }}>
                <div>
                  <h4 key={name + index} className="userName">
                    {name}
                  </h4>
                  <p className="userDesc">
                    Fusce dapibus, tellus ac cursus commodo, tort...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default ChatSideBarUser;
