import React from "react";
import {
  GitHub,
  LinkedIn,
  Home,
  Phone,
  PhoneAndroid,
  Email,
  LocationOn,
} from "@mui/icons-material";
import "./styles/Info.css";

const Info = () => {
  return (
    <>
      <div className="info">
        <p className="heading">Info</p>
        <p className="p1">
          <span className="span1">
            <GitHub className="img" color="action" fontSize="large" />
            <b>GitHub</b>
            <span>
              <br />
              <a
                rel="noreferrer"
                href="https://github.com/JhonLudenaReyes"
                target={"_blank"}
                className="infoLink"
              >
                JhonLudenaReyes
              </a>
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <LinkedIn className="img" color="action" fontSize="large" />
            <b>LinkedIn</b>
            <span>
              <br />
              <a
                rel="noreferrer"
                href="linkedin.com/in/jhon-jefferson-ludeña-reyes-847307195"
                target={"_blank"}
                className="infoLink"
              >
                jhon-jefferson-ludeña-reyes-847307195
              </a>
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Home className="img" color="action" fontSize="large" />
            <b>Address</b>
            <span>
              <br />
              B.CENTENARIO CALLE 2 E/AVS.8-9
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Phone className="img" color="action" fontSize="large" />
            <b>Phone</b>
            <span>
              <br />
              (042) - 930 355
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <PhoneAndroid className="img" color="action" fontSize="large" />
            <b>CellPhone</b>
            <span>
              <br />
              0962992443
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Email className="img" color="action" fontSize="large" />
            <b>Email</b>
            <span>
              <br />
              ludena.jhon.j.6392@outlook.com
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <LocationOn className="img" color="action" fontSize="large" />{" "}
            <b>Location</b>
            <span>
              <br />
              Salinas - Santa Elena - Ecuador
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Info;
