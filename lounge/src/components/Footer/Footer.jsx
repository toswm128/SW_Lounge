import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link>
        <img
          className="footer-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
          alt=""
        />
      </Link>
      <Link>
        <img
          className="footer-img"
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Kakao_CI_yellow.svg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Footer;
