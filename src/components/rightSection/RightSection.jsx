import React from "react";
import Profile from "../profile/Profile";
import WorkExperience from "../workExperience/WorkExperience";
import Education from "../education/Education";
import Skill from "../skill/Skill";
import Tool from "../tool/Tool";
import Certificate from "../certificate/Certificate";
import "./styles/RightSection.css";

const RightSection = () => {
  return (
    <>
      <div className="right-section">
        <Profile />
        <WorkExperience />
        <Education />
        <Skill />
        <Tool />
        <Certificate />
      </div>
    </>
  );
};

export default RightSection;
