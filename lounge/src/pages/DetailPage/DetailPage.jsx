import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Detail from "../../components/Detail/Detail";
import Footer from "../../components/Footer/Footer";
import useInput from "../../hooks/useInput";
import DetailAPI from "../../assets/API/DetailAPI";
import Comment from "../../assets/API/Comment";
import useSwitch from "../../hooks/useSwitch";

const DetailPage = () => {
  const [qnaList, setQnaList] = useState({});

  const history = useHistory();
  //쿼리 스트링 가져오는 작업
  const query = history.location.search.split("=")[1];
  //해당하는 데이터만 가져옴
  const getQnaDetail = async () => {
    DetailAPI.getDetail(query * 1).then(current => setQnaList(current.data));
  };
  useEffect(() => getQnaDetail(), []);
  const name = useInput("");
  const password = useInput("");
  const kakao = useSwitch(false);
  const answer = useInput("");

  const postComment = async (name, board_id, content, password, kakao) => {
    Comment.postComment(name, board_id, content, password, kakao);
  };

  const updateComment = async (
    id,
    name,
    board_id,
    content,
    password,
    kakao
  ) => {
    Comment.updateComment(id, name, board_id, content, password, kakao);
  };

  const delectComment = async id => {
    Comment.delectComment(id);
  };

  return (
    <div>
      <Header />
      <Detail
        qnaData={qnaList}
        name={name}
        password={password}
        kakao={kakao}
        answer={answer}
        postComment={postComment}
        delectComment={delectComment}
        updateComment={updateComment}
      />
      <Footer />
    </div>
  );
};

export default DetailPage;
