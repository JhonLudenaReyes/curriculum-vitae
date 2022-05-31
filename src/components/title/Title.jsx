import React from "react";
import LogoCurriculum from "../../image/profile.jpg";
import "./styles/Title.css";

const Title = () => {
  return (
    <>
      <div className="profile">
        <img
          src={LogoCurriculum}
          className="profile-img"
          alt="Logo Curriculum"
        />
        <div className="blue-box"></div>
      </div>
      <h2 className="name">
        Jhon
        <br />
        <span>Ludeña</span>
      </h2>
      <p className="n-p">Software Engineer</p>
    </>
  );
};

export default Title;
