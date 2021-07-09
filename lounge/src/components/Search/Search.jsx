import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = ({ searchValue, searcher }) => {
  return (
    <div className="search">
      <div className="content">
        <div className="s-form">
          <select className="s-select" {...searcher}>
            <option value="제목">제목</option>
            <option value="작성자">작성자</option>
            <option value="태그">태그</option>
            <option value="언어">언어</option>
          </select>
          <input className="s-input" type="text" {...searchValue} />
          <Link className="s-button" to="/write">
            <button className="s-b-item">작성하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
