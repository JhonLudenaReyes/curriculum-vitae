import React from "react";
import {
  GitHub,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";

const Social = () => {
  return (
    <>
      <div className="info">
        <p className="heading">Social</p>
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
            <Facebook className="img" color="action" fontSize="large" />
            <b>Facebook</b>
            <span>
              <br />
              JhonLudena
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Instagram className="img" color="action" fontSize="large" />
            <b>Instagram</b>
            <span>
              <br />
              JhonLudena
            </span>
          </span>
        </p>
        <p className="p1">
          <span className="span1">
            <Twitter className="img" color="action" fontSize="large" />
            <b>Twitter</b>
            <span>
              <br />
              JhonLudena
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Social;
