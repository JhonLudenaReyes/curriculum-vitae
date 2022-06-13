import React from "react";
import { AccountCircle } from "@mui/icons-material";
import "./styles/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="right-heading">
        <AccountCircle className=".img-account-circule" />
        <p className="p2">Profile</p>
      </div>
    </>
  );
};

export default Profile;
