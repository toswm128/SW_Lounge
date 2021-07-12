import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

const Detail = ({ qnaData, answer }) => {
  //배열분리
  const qna = qnaData[0];
  return (
    <div className="detail">
      <div className="content">
        <div className="d-title d-header">{qna.title}</div>
        <div className="d-nav">
          <div className="d-n-writer d-header">{qna.writer}</div>
          <div className="d-n-language d-header">{qna.language}</div>
        </div>
        <div className="d-nav">
          <div className="d-n-date d-header">{qna.date}</div>
          <Link to={"update?id=" + qna.id} className="d-n-update d-header">
            수정
          </Link>
        </div>
        <div className="d-qTitle">질문</div>
        <div className="d-q">{qna.q}</div>
        {qna.a &&
          qna.a.map((current, index) => (
            <div className="d-a" key={index}>
              {current}
            </div>
          ))}
        <div className="d-aTitle">답변하기</div>
        <textarea
          className="d-aWrite"
          placeholder="질문에 대한 답변을 해주세요"
          {...answer}
        ></textarea>
        <div className="d-form">
          <button className="d-f-button">작성하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
