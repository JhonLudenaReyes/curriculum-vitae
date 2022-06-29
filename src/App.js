import React from "react";
import Resume from "./components/resumen/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CertifJavascript from "./components/certificate/certificates/Javascript.jsx";
import CertifWebDesing from "./components/certificate/certificates/WebDesing.jsx";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route
            path="/curriculum-vitae/javascript-certificate"
            element={<CertifJavascript />}
          />
          <Route
            path="/curriculum-vitae/web-desing-certificate"
            element={<CertifWebDesing />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
