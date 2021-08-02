import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import QnaList from "../../components/QnaList/QnaList";
import useInput from "../../hooks/useInput";
import useSelect from "../../hooks/useSelect";
import Board from "../../assets/API/Board";

const QnaListPage = () => {
  //서버에서 가져온 데이터
  const [qnaList, setQnaList] = useState([]);
  const getQnaList = async () => {
    await Board.getBoard().then(current => {
      setQnaList(current.data);
    });
  };
  useEffect(() => {
    getQnaList().then(() => console.log(qnaList));
  }, []);

  const searchValue = useInput("");
  const searcher = useSelect("제목");
  return (
    <div>
      <Header />
      {qnaList && (
        <QnaList
          qnaList={qnaList}
          searchValue={searchValue}
          searcher={searcher}
        />
      )}
      <Footer />
    </div>
  );
};

export default QnaListPage;
