import React from "react";
import { Image } from "react-bootstrap";
import CertifWebDesing from "../../../image/FT EC - Diseño Web con HTML5 + CSS_page-0001.jpg";

const WebDesing = () => {
  return (
    <>
      <Image
        src={CertifWebDesing}
        alt="Certificado Diseño Web"
        width={1000}
        height={600}
        style={{ display: "block", margin: "10px auto" }}
      />
    </>
  );
};

export default WebDesing;
