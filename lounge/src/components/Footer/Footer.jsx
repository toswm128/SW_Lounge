import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://www.instagram.com/jnu_sw_lounge/">
        <img
          className="footer-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
          alt=""
        />
      </Link>
      <Link to="http://pf.kakao.com/_xiBKcK">
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
