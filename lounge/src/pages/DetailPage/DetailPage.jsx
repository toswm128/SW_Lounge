import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Detail from "../../components/Detail/Detail";
import Footer from "../../components/Footer/Footer";
import useInput from "../../hooks/useInput";

const DetailPage = () => {
  //서버에서 받는 데이터
  const qnaList = [
    {
      id: 1,
      title: "제목",
      writer: "나",
      tags: ["d", "a"],
      language: "한국어",
      date: "2021-07-09",
      pwd: 1234,
      q: "질문입니다",
      a: [""],
    },
    {
      id: 0,
      title: "히히",
      writer: "누구",
      tags: ["react", "c#", "java", "vue"],
      language: "한국어",
      date: "2021-07-09",
      pwd: 1234,
      q: "질문입니다",
      a: ["답변입니다", "답변2"],
    },
  ];
  const history = useHistory();
  //쿼리 스트링 가져오는 작업
  const query = history.location.search.split("=")[1];
  //해당하는 데이터만 가져옴
  const qnaData = qnaList.filter(qna => qna.id === query * 1);

  const answer = useInput("");
  return (
    <div>
      <Header />
      <Detail qnaData={qnaData} answer={answer} />
      <Footer />
    </div>
  );
};

export default DetailPage;
