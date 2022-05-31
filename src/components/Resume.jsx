import React from "react";
import Title from "./title/Title";
import Info from "./info/Info";
import Social from "./social/Social";
import "./styles/Resume.css";

const Resume = () => {
  return (
    <>
      <div className="resume-box">
        <div className="left-section">
          <Title />
          <Info />
          <Social />
        </div>
        <div className="right-section"></div>
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default Resume;
