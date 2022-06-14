import React from "react";
import { AssuredWorkload } from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
import { Col, Row } from "react-bootstrap";

const WorkExperience = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <AssuredWorkload className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Work Experience</p>
          </Col>
        </Row>
      </div>
      <div className="clearfix"></div>
      <div className="lr-box">
        <div className="left">
          <p className="p4">2012 - 2014</p>
          <p className="p5">New Delhi</p>
        </div>
        <div className="right">
          <p className="p4">Web Designer</p>
          <p className="p5">Retoching Company</p>
          <p className="p5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            impedit, voluptates minima corporis nam temporibus.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">2012 - 2014</p>
          <p className="p5">New Delhi</p>
        </div>
        <div className="right">
          <p className="p4">Web Designer</p>
          <p className="p5">Retoching Company</p>
          <p className="p5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            impedit, voluptates minima corporis nam temporibus.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">2012 - 2014</p>
          <p className="p5">New Delhi</p>
        </div>
        <div className="right">
          <p className="p4">Web Designer</p>
          <p className="p5">Retoching Company</p>
          <p className="p5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            impedit, voluptates minima corporis nam temporibus.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">2012 - 2014</p>
          <p className="p5">New Delhi</p>
        </div>
        <div className="right">
          <p className="p4">Web Designer</p>
          <p className="p5">Retoching Company</p>
          <p className="p5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            impedit, voluptates minima corporis nam temporibus.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default WorkExperience;
