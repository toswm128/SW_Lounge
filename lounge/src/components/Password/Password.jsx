import React from "react";
import "./Password.css";

const Password = ({ password, isPass, pwdInput }) => {
  const tryPass = () => {
    pwdInput.value * 1 === password * 1
      ? isPass.onClick()
      : alert("비밀번호가 틀렸습니다.");
  };
  return (
    <div className="password">
      <div className="content">
        <form
          onSubmit={e => {
            e.defaultPrevented();
            tryPass();
          }}
          className="p-form"
        >
          <div className="p-f-title">비밀번호를 입력해주세요</div>
          <input type="password" className="p-f-input" {...pwdInput} />
          <button className="p-f-button" onClick={tryPass}>
            확인하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
