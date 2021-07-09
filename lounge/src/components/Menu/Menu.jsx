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
          <div className="title">SW Lounge</div>
          <Link className="nav-item" to="/qna">
            3D프린터 예약
          </Link>

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
