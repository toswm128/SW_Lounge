import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import QnaList from "../../components/QnaList/QnaList";
import useInput from "../../hooks/useInput";
import useSelect from "../../hooks/useSelect";

const QnaListPage = () => {
  const qnaList = [
    {
      id: 1,
      title: "제목",
      writer: "나",
      tags: ["d", "a"],
      language: "한국어",
      date: "2021-07-09",
    },
    {
      id: 0,
      title: "히히",
      writer: "누구",
      tags: ["react", "c#", "java", "vue"],
      language: "한국어",
      date: "2021-07-09",
    },
  ];
  const searchValue = useInput("");
  const searcher = useSelect("제목");
  return (
    <div>
      <Header />
      <QnaList
        qnaList={qnaList}
        searchValue={searchValue}
        searcher={searcher}
      />
      <Footer />
    </div>
  );
};

export default QnaListPage;
