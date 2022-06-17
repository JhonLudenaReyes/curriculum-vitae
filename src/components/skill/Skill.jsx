import React from "react";
import { Construction } from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
import { Col, Row } from "react-bootstrap";

const Skill = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <Construction className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Skill and epertize</p>
          </Col>
        </Row>
      </div>
      <div className="clearfix"></div>
      <div className="s-box">
        <p className="p6">Software Developer</p>
        <div id="progress"></div>
        <p className="p6">Frontend Developer</p>
        <div id="progress1"></div>
      </div>

      <div className="s-box">
        <p className="p6">Web Desingner</p>
        <div id="progress2"></div>
        <p className="p6">Backend Developer</p>
        <div id="progress3"></div>
      </div>
      <div className="clearfix"></div>
      <br />
    </>
  );
};

export default Skill;
