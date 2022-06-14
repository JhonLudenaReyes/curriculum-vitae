import React from "react";
import Profile from "../profile/Profile";
import WorkExperience from "../workExperience/WorkExperience";
import "./styles/RightSection.css";

const RightSection = () => {
  return (
    <>
      <div className="right-section">
        <Profile />
        <WorkExperience />
      </div>
    </>
  );
};

export default RightSection;
