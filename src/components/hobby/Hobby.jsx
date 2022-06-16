import React from "react";
import {
  Rowing,
  Piano,
  SportsBasketball,
  SportsEsports,
  Movie,
  SportsSoccer,
} from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
import { Col, Row } from "react-bootstrap";
import HTML5 from "../../image/HTML5.png";
import CSS3 from "../../image/CSS3.png";
import JAVASCRIPT from "../../image/JAVASCRIPT.png";
import REACT from "../../image/REACT.png";
import REDUX from "../../image/REDUX.png";
import MYSQL from "../../image/MYSQL.png";
import GIT from "../../image/Git_icon.svg.png";
import GITHUB from "../../image/GitHub-logo.png";
import NPM from "../../image/NPM.png";
import NODEJS from "../../image/NODEJS.png";
import BABEL from "../../image/BABEL.png";
import WEBPACK from "../../image/WEBPACK.png";

const Hobby = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <Rowing className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Hobby & Internet</p>
          </Col>
        </Row>
      </div>
      <div className="clearfix"></div>
      <img src={HTML5} alt="HTML5" className="h-img" />
      <img src={CSS3} alt="CSS3" className="h-img" />
      <img src={JAVASCRIPT} alt="JAVASCRIPT" className="h-img" />
      <img src={REACT} alt="REACT" className="h-img" />
      <img src={REDUX} alt="REDUX" className="h-img" />
      <img src={MYSQL} alt="MYSQL" className="h-img" />
      <img src={GIT} alt="GIT" className="h-img" />
      <img src={GITHUB} alt="GITHUB" className="h-img" />
      <img src={NPM} alt="NPM" className="h-img" />
      <img src={BABEL} alt="GIT" className="h-img" />
      <img src={WEBPACK} alt="NPM" className="h-img" />
      <img src={NODEJS} alt="NODEJS" className="h-img" />
      <Piano className="h-img" />
      <SportsBasketball className="h-img" />
      <SportsEsports className="h-img" />
      <Movie className="h-img" />
      <SportsSoccer className="h-img" />
      <br />
    </>
  );
};

export default Hobby;