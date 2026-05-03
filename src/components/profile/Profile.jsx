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
        Ingeniero en Sistemas enfocado en el desarrollo Full Stack. Especialista
        en la creación de APIs robustas y conocimientos sólidos en ecosistemas
        como Java (Spring Boot) y C# (.NET Core). Con experiencia en la creación
        de interfaces dinámicas y escalables utilizando Angular y React/Redux.
        Cuento con habilidades avanzadas en el diseño y gestión de bases de
        datos relacionales, implementación de arquitecturas MVC, control de
        versiones con Git y documentación de APIs con Swagger.
      </p>
      <div className="clearfix"></div>
      <br />
    </>
  );
};

export default Profile;
