import React from "react";

import "./Write.css";

const Write = ({
  title,
  language,
  password,
  keyWord,
  keyWord1,
  keyWord2,
  writer,
  content,
  tryWrite,
}) => {
  return (
    <div className="write">
      <div className="content">
        <div className="w-title">게시글 작성</div>
        <div className="w-from">
          <input
            className="w-f-title w-f"
            type="text"
            {...title}
            placeholder="제목"
          />
          <select className="w-f-len w-f" {...language}>
            <option value={null}>언어</option>
            <option value="C">C</option>
            <option value="JS">JavaScript</option>
            <option value="PYTHON">PYTHON</option>
            <option value="JAVA">JAVA</option>
            <option value="C+">C+</option>
          </select>
          <input
            className="w-f-pwd w-f"
            type="text"
            {...password}
            placeholder="비밀번호"
          />
          <input
            className="w-f-key w-f"
            type="text"
            {...keyWord}
            placeholder="키워드1                               ex)C, Python"
          />
          <input
            className="w-f-key1 w-f"
            type="text"
            {...keyWord1}
            placeholder="키워드2              ex)함수,배열"
          />
          <input
            className="w-f-key2 w-f"
            type="text"
            {...keyWord2}
            placeholder="키워드3"
          />
          <input
            className="w-f-writer w-f"
            type="text"
            {...writer}
            placeholder="작성자"
          />
          <textarea
            className="w-f-content w-f"
            {...content}
            placeholder="내용"
          />
          <button className="w-f-button w-f" onClick={tryWrite}>
            작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
