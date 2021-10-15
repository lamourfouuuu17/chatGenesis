import React from "react";
import { Container } from "reactstrap";

const Header = () => {
  return (
    <Container fluid style={{ padding: "0" }}>
      <div
        className="header"
        style={{
          backgroundColor: "white",
          color: "black",
          height: "80px",
          padding: "25px 80px 20px",
          fontSize: "32px",
          fontWeight: "600",
        }}
      >
        Chat bots 2.0
      </div>
    </Container>
  );
};

export default Header;
