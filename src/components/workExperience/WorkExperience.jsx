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
          <p className="p4">Feb 2020 - Mar 2021</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">CODEWAY (Durante 1 años y 1 meses)</p>
          <p className="p5">FRONTEND DEVELOPER</p>
          <p className="p5">
            o CONFIGURACIÓN DE SISTEMAS WEB PARA TRABAJO REMOTO
            <br />
            o DESARROLLO DE INTERFACES MEDIATE REACT-BOOTSTRAP
            <br />
            o CONSUMO DE SERVICIOS REST
            <br />
            o DESARROLLO DE SISTEMAS WEB UTILIZANDO REACT
            <br />
            o GESTION DEL ESTADO DEL SISTEMA MEDIANTE REDUX
            <br />o UTILIZACIÓN DE LA TECNOLOGÍA GIT PARA EL CONTROL DE
            VERSIONES
            <br />
            o UTILIZACIÓN DE GITHUB COMO REPOSITORIO EN LA NUBE
            <br />
            o EMPAQUETAMIENTO DE COMPONETES CON WEBPACK
            <br />
            o PROGRAMACIÓN ORIENTADA A OBJETOS
            <br />
            o UTILIZACIÓN DE LA TECNOLOGÍA BABEL
            <br />
            o CONFIGURACIÓN DE ENTONRNO DE DESARROLLO (VISUAL STUDIO CODE)
            <br />o UTILIZAR NPM COMO ADMINISTRADOR DE PAQUETES DE NODE
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">Abr 2017 - Oct 2018</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">
            LAS ANGUILAS LASAN S.A. SYSTECON (Durante 1 años y 7 meses)
          </p>
          <p className="p5">TÉCNICO DE EQUIPOS INFORMÁTICOS</p>
          <p className="p5">
            o LIMPIEZA Y MANTENIMIENTO DE EQUIPOS <br />o REPARACIÓN DE EQUIPOS
            INFORMÁTICOS <br />o INSTALACIÓN Y CONFIGURACIÓN DE REDES <br />o
            INSTALACIÓN DE SISTEMAS OPERATIVOS <br />o INSTALACIÓN DE IMPRESORAS{" "}
            <br />o CIRCUITO CERRADO DE CÁMARAS <br />o INSTALACIÓN DE SOFTWARE{" "}
            <br />o INSTALACIÓN Y ACTUALIZACIÓN DE ANTIVIRUS
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">Sep 2017 – Dic 2017</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">
            GOBIERNO AUTÓNOMO DESCENTRALIZADO MUNICIPAL LA LIBERTAD (Durante 4
            meses)
          </p>
          <p className="p5">PASANTE DE INGENIERÍA EN SISTEMAS</p>
          <p className="p5">
            o ACTUALIZACIÓN Y CONFIGURACIÓN DEL SISTEMA WEB <br />o
            MANTENIMIENTO DE SERVIDORES <br />o INSTALACIÓN Y CONFIGURACIÓN DE
            REDES INFORMÁTICAS <br />o INSTALACIÓN CIRCUITO CERRADO DE CÁMARAS
            DE SEGURIDAD <br />o ADMINISTRACIÓN Y CONTROL DE EQUIPOS
            INFORMÁTICOS <br />o REPARACIÓN Y MANTENIMIENTO DE ORDENADORES{" "}
            <br />o GENERACIÓN DE BACK-UP DE SEGURIDAD <br />o CONFIGURACIÓN Y
            MANTENIMIENTO DE IMPRESORAS <br />o ACTUALIZACIÓN DE SISTEMAS
            OPERATIVOS <br />o CONFIGURACIÓN Y DIRECCIONAMIENTO IP <br />o
            ADMINISTRACIÓN DE REDES <br />o GESTIÓN DE FUNCIONALIDAD DE
            ORDENADORES
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
      <br />
    </>
  );
};

export default WorkExperience;
