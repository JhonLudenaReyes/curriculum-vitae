import React from "react";
import LeftSection from "../leftSection/LeftSection";
import RightSection from "../rightSection/RightSection";
import "./styles/Resume.css";
import { Col, Container, Row } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <Container>
        <div className="resume-box">
          <Row>
            <Col>
              <LeftSection />
            </Col>
            <Col>
              <RightSection />
            </Col>
          </Row>
          <div className="clearfix"></div>
        </div>
      </Container>
    </>
  );
};

export default Resume;
