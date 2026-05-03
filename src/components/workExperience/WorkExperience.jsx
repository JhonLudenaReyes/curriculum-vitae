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
          <p className="p4">Jul 2022 - Ene 2023</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">VIAMATICA</p>
          <p className="p5">FULL STACK DEVELOPER</p>
          <p className="p5">
            o Diseñé e implementé arquitecturas de Backend robustas utilizando
            Java con el framework Spring Boot, asegurando un flujo de datos
            eficiente bajo el patrón MVC.
            <br />
            o Desarrollé interfaces de usuario modernas y reactivas mediante
            Angular, optimizando la experiencia estética y funcional con la
            librería de componentes PrimeNG.
            <br />
            o Aseguré la interoperabilidad de los sistemas mediante el consumo y
            creación de servicios REST, facilitando la integración de múltiples
            módulos de software.
            <br />o Gestioné el ciclo de vida del código y la colaboración
            técnica utilizando Git para el control de versiones.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="lr-box">
        <div className="left">
          <p className="p4">Feb 2020 - Mar 2021</p>
          <p className="p5">Ecuador</p>
        </div>
        <div className="right">
          <p className="p4">CODEWAY</p>
          <p className="p5">FRONTEND DEVELOPER</p>
          <p className="p5">
            o Lideré el desarrollo de sistemas web dinámicos utilizando React,
            enfocándome en la creación de componentes reutilizables y de alto
            rendimiento.
            <br />
            o Implementé una gestión de estado centralizada y predecible
            mediante Redux, mejorando la mantenibilidad de aplicaciones
            complejas.
            <br />
            o Configuré entornos de desarrollo avanzados utilizando Webpack para
            el empaquetado de módulos y Babel para garantizar la compatibilidad
            con navegadores antiguos.
            <br />o Integré estilos responsivos con React-Bootstrap,
            garantizando una visualización óptima en diversos dispositivos y
            resoluciones.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>

      <br />
    </>
  );
};

export default WorkExperience;
