import React from "react";
import { School } from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles/Certificate.css";

const Certificate = () => {
  return (
    <>
      <div className="right-heading">
        <Row style={{ padding: "0px 8px 0px 8px" }}>
          <Col lg="2" style={{ width: "70px" }}>
            <School className="account-circle" />
          </Col>
          <Col>
            <p className="p2">Certificate</p>
          </Col>
        </Row>
      </div>
      <div className="clearfix"></div>
      <div className="lr-box">
        <div>
          <p className="p4">FT EC - PROGRAMACIÓN CON JAVASCRIPT</p>
          <p className="p5">
            Finalizado: 19/07/2021 (Ha superado con éxito el curso de 40 h)
          </p>
          <p className="p5">
            Respaldado: FUNDACIÓN TELEFÓNICA MOVISTAR – Programa de formación
            digital
          </p>
          <p className="p5">
            Referente: ENRIQUE JAVIER ALVARADO LLERENA (Director Ejecutivo
            Fundación telefónica Ecuador)
          </p>
          <Link to="/" className="certificte-link">
            Ver certificado
          </Link>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div>
          <p className="p4">FT EC - DISEÑO WEB CON HTML5 + CSS</p>
          <p className="p5">
            Finalizado: 06/07/2021 (Ha superado con éxito el curso de 30 h)
          </p>
          <p className="p5">
            Respaldado: FUNDACIÓN TELEFÓNICA MOVISTAR – Programa de formación
            digital
          </p>
          <p className="p5">
            Referente: ENRIQUE JAVIER ALVARADO LLERENA (Director Ejecutivo
            Fundación telefónica Ecuador)
          </p>
          <Link to="/" className="certificte-link">
            Ver certificado
          </Link>
        </div>
        <div className="clearfix"></div>
      </div>
      <br />
    </>
  );
};

export default Certificate;
