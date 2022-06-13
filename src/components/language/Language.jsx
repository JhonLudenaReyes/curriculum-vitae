import React from "react";
import { Public, Translate } from "@mui/icons-material";

const Language = () => {
  return (
    <>
      <div className="info">
        <p className="heading">Language</p>
        <p className="p1">
          <span className="span1">
            <Public className="img" color="action" fontSize="large" />
            <b>English</b>
            <span>
              <br />
              Basic
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Translate className="img" color="action" fontSize="large" />
            <b>Spanish</b>
            <span>
              <br />
              Native
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Language;
