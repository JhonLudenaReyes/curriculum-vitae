import React from "react";
import { AccountCircle } from "@mui/icons-material";
import "./styles/Profile.css";
import { Col, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <AccountCircle className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Profile</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
