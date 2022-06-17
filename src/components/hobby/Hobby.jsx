import React from "react";
import {
  LibraryMusic,
  Piano,
  SportsBasketball,
  SportsEsports,
  Movie,
  SportsSoccer,
  Pool,
  LiveTv,
} from "@mui/icons-material";

const Hobby = () => {
  return (
    <>
      <div className="info">
        <p className="heading">Hobby</p>
        <p className="p1">
          <span className="span1">
            <LibraryMusic className="img" color="action" fontSize="large" />
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Piano className="img" color="action" fontSize="large" />
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <SportsBasketball className="img" color="action" fontSize="large" />
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <SportsEsports className="img" color="action" fontSize="large" />
          </span>
        </p>
        <br />
        <p className="p1">
          <span className="span1">
            <Movie className="img" color="action" fontSize="large" />
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <SportsSoccer className="img" color="action" fontSize="large" />
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Pool className="img" color="action" fontSize="large" />
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <LiveTv className="img" color="action" fontSize="large" />
          </span>
        </p>
      </div>
    </>
  );
};

export default Hobby;
