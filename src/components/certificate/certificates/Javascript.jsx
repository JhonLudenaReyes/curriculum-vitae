import React from "react";
import { Image } from "react-bootstrap";
import CertifJavascript from "../../../image/FT EC - Programación con JavaScript_page-0001.jpg";

const Javascript = () => {
  return (
    <>
      <Image
        src={CertifJavascript}
        alt="Certificado Javascript"
        width={1000}
        height={600}
        style={{ display: "block", margin: "10px auto" }}
      />
    </>
  );
};

export default Javascript;
