import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hButton from "../../assets/png/hamburger.png";
import useSwitch from "../../hooks/useSwitch";
import "./Menu.css";

const Menu = () => {
  const isMenu = useSwitch(false);
  return (
    <div className="menu">
      <div className={"white " + (isMenu.value && "openMenu")}></div>
      <div></div>
      {isMenu.value ? (
        <>
          <Link className="nav-item" to="/qna">
            Q&A
          </Link>
          <Link className="nav-item" to="/printer">
            3D Printer
          </Link>
          <div className="title">SW Lounge</div>
          <a
            className="nav-item"
            href="https://www.instagram.com/jnu_sw_lounge/"
          >
            Instagram
          </a>
          <a className="nav-item" href="http://pf.kakao.com/_xiBKcK">
            KaKaotalk Channel
          </a>
          <img
            className="m-button"
            onClick={isMenu.onClick}
            src={hButton}
            alt=""
          />
        </>
      ) : (
        <>
          <div className="title">SW Lounge</div>
          <img
            className="m-button"
            onClick={isMenu.onClick}
            src={hButton}
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Menu;
