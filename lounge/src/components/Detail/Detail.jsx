import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

const Detail = ({
  qnaData,
  answer,
  name,
  password,
  kakao,
  postComment,
  delectComment,
  updateComment,
  pwdInput,
}) => {
  return (
    <div className="detail">
      <div className="content">
        <div className="d-title d-header">{qnaData.title}</div>
        <div className="d-nav">
          <div className="d-n-writer d-header">{qnaData.writer}</div>
          <div className="d-n-language d-header">{qnaData.language}</div>
        </div>
        <div className="d-nav">
          <div className="d-n-date d-header">{qnaData.create_at}</div>
          <Link to={"update?id=" + qnaData.id} className="d-n-update d-header">
            수정
          </Link>
        </div>
        <div className="d-question">
          <div className="d-qTitle">질문</div>
          <div className="d-q">{qnaData.content}</div>
        </div>
        {
          <div className="d-answer">
            <div className="d-aTitle">답변</div>

            {qnaData.comment && qnaData.comment[0] ? (
              qnaData.comment.map(current => (
                <div className="d-a" key={current.id}>
                  <div className="d-a-header">
                    <div>{current.create_at}</div>
                    <div>{current.name}</div>
                  </div>
                  <div className="d-a-header">
                    <div className="d-a-option">
                      <div
                        onClick={() => {
                          password.value === current.password
                            ? updateComment(
                                name.value,
                                qnaData.id,
                                answer.value,
                                password.value,
                                kakao.value,
                                current.id
                              )
                            : pwdInput.current.focus().then(() => {
                                alert("비밀번호가 일치하지 않습니다");
                              });
                        }}
                      >
                        수정
                      </div>
                      <div
                        onClick={() => {
                          password.value === current.password
                            ? delectComment(current.id)
                            : pwdInput.current.focus().then(() => {
                                alert("비밀번호가 일치하지 않습니다");
                              });
                        }}
                      >
                        삭제
                      </div>
                    </div>
                  </div>
                  <div className="d-a-content">{current.content}</div>
                </div>
              ))
            ) : (
              <div className="d-a">
                아직 답변이 없습니다 답변을 추가해 보세요
              </div>
            )}
          </div>
        }
        <div className="d-aTitle">답변하기</div>
        <input type="text" {...name} placeholder="이름" />
        <input
          type="text"
          {...password}
          ref={pwdInput}
          placeholder="비밀번호"
        />
        <input type="checkbox" {...kakao} />
        <textarea
          className="d-aWrite"
          placeholder="질문에 대한 답변을 해주세요"
          {...answer}
        ></textarea>
        <div className="d-form">
          <button
            className="d-f-button"
            onClick={() =>
              postComment(
                name.value,
                qnaData.id,
                answer.value,
                password.value,
                kakao.value
              )
            }
          >
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
