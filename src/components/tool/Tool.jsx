import React from "react";
import { Wysiwyg } from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
import { Col, Row } from "react-bootstrap";
import HTML5 from "../../image/HTML5.png";
import CSS3 from "../../image/CSS3.png";
import ANGULAR from "../../image/angular-icon-logo.png";
import JAVASCRIPT from "../../image/JAVASCRIPT.png";
import REACT from "../../image/REACT.png";
import REDUX from "../../image/REDUX.png";
import MYSQL from "../../image/MYSQL.png";
import SQLSERVER from "../../image/sql-server-logo.png";
import GIT from "../../image/Git_icon.svg.png";
import GITHUB from "../../image/GitHub-logo.png";
import NPM from "../../image/NPM.png";
import Java from "../../image/JAVA.png";
import SPRING from "../../image/Spring.png";
import SPRINGBOOT from "../../image/Spring-Boot.png";
import NETCORE from "../../image/NET_Core_Logo.svg.png";
import CSHARP from "../../image/c-sharp-c-icon.png";
import REACTBOOSTRAP from "../../image/bootstrap-react-logo.jpg";
import VSCODE from "../../image/visual-studio-code-logo.png";

const Tool = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <Wysiwyg className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Tools</p>
          </Col>
        </Row>
      </div>
      <div className="clearfix"></div>
      <img src={HTML5} alt="HTML5" className="h-img" />
      <img src={CSS3} alt="CSS3" className="h-img" />
      <img src={JAVASCRIPT} alt="JAVASCRIPT" className="h-img" />
      <img src={ANGULAR} alt="ANGULAR" className="h-img" />
      <img src={REACT} alt="REACT" className="h-img" />
      <img src={REACTBOOSTRAP} alt="REACTBOOSTRAP" className="h-img" />
      <img src={REDUX} alt="REDUX" className="h-img" />
      <img src={CSHARP} alt="CSHARP" className="h-img" />
      <img src={NETCORE} alt="NETCORE" className="h-img" />
      <img src={Java} alt="Java" className="h-img" />
      <img src={SPRING} alt="SPRING" className="h-img" />
      <img src={SPRINGBOOT} alt="SPRINGBOOT" className="h-img" />
      <img src={MYSQL} alt="MYSQL" className="h-img" />
      <img src={SQLSERVER} alt="SQLSERVER" className="h-img" />
      <img src={GIT} alt="GIT" className="h-img" />
      <img src={GITHUB} alt="GITHUB" className="h-img" />
      <img src={NPM} alt="NPM" className="h-img" />
      <img src={VSCODE} alt="VSCODE" className="h-img" />
      <br />
      <br />
    </>
  );
};

export default Tool;
