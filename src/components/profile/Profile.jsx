import React from "react";
import { AccountCircle } from "@mui/icons-material";
import "../rightSection/styles/RightSection.css";
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
      <p className="p3">
        Fundamentos en ingeniería de sistemas, telemática, comunicaciones,
        computación, electrónica y el campo de las telecomunicaciones.
        Conocimientos en diseño, desarrollo e implementación de sistemas
        informáticos aplicando diversas tecnologías y utilizando herramientas de
        software y hardware para su despliegue, además de contar con habilidades
        para diseñar, estructurar y gestionar bases de datos relacionales.
        Aptitudes y destrezas referentes a ciencia y al ámbito tecnológico para
        aportar con soluciones a problemas reales. Capacidades gerenciales para
        el área de sistemas y administrar proyectos de desarrollo.
      </p>
      <div className="clearfix"></div>
      <br />
    </>
  );
};

export default Profile;
