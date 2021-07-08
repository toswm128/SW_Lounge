import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="title">메뉴</div>
      <div className="nav">
        <Link className="nav-item" to="/qna">
          Q&A
        </Link>
        <Link className="nav-item" to="/qna">
          3D프린터 예약
        </Link>
      </div>
    </div>
  );
};

export default Menu;
