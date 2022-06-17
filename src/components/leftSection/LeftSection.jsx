import React from "react";
import Info from "../info/Info";
import Language from "../language/Language";
import Social from "../social/Social";
import Title from "../title/Title";
import Hobby from "../hobby/Hobby";
import "./styles/LeftSection.css";

const LeftSection = () => {
  return (
    <>
      <div className="left-section">
        <Title />
        <Info />
        <Social />
        <Language />
        <Hobby />
      </div>
    </>
  );
};

export default LeftSection;
