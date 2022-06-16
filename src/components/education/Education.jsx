import React from "react";
import { School } from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
import { Col, Row } from "react-bootstrap";

const Education = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <School className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Education</p>
          </Col>
        </Row>
      </div>
      <div className="clearfix"></div>
      <div className="lr-box">
        <div className="left">
          <p className="p4">Abr 2012 - Feb 2020</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">INGENIERÍA EN SISTEMAS (Universitaria)</p>
          <p className="p5">UNIVERSIDAD ESTATAL PENÍNSULA DE SANTA ELENA</p>
          <p className="p5">Área De Estudio: INGENIERÍA EN SISTEMAS Graduado</p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">Ene 2005 – Dic 2010</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">ADMINISTRACIÓN DE SISTEMAS (Secundaria)</p>
          <p className="p5">COLEGIO MIXTO PARTICULAR FRANK VARGAS PAZZOS</p>
          <p className="p5">
            Área De Estudio: COMPUTACIÓN/INFORMÁTICA Graduado
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">Ene 1998 – Dic 2004</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">EDUCACIÓN BÁSICA (Primaria)</p>
          <p className="p5">ESCUELA MIXTA PARTICULAR Nº 2 “EL VIGÍA”</p>
          <p className="p5">Área De Estudio: EDUCACIÓN BÁSICA Graduado</p>
        </div>
        <div className="clearfix"></div>
      </div>
      <br />
    </>
  );
};

export default Education;
