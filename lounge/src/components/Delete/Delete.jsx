import React from "react";
import "./Delete.css";

const Delete = ({ deleteDetail }) => {
  return (
    <div className="delete">
      <button onClick={deleteDetail}>삭제</button>
    </div>
  );
};

export default Delete;
