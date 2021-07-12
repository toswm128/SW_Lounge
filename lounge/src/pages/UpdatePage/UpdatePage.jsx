import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Write from "../../components/Write/Write";
import Footer from "../../components/Footer/Footer";
import useInput from "../../hooks/useInput";
import useSelect from "../../hooks/useSelect";
import Password from "../../components/Password/Password";
import useSwitch from "../../hooks/useSwitch";
const UpdatePage = () => {
  const qnaList = [
    {
      id: 1,
      title: "제목",
      writer: "나",
      tags: ["d", "a"],
      language: "한국어",
      date: "2021-07-09",
      password: 1234,
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
      password: 1234,
      q: "질문입니다",
      a: ["답변입니다", "답변2"],
    },
  ];
  const history = useHistory();
  const query = history.location.search.split("=")[1];
  const qnaData = qnaList.filter(qna => qna.id === query * 1);
  const qna = qnaData[0];

  const title = useInput(qna.title);
  const language = useSelect(qna.language);
  const password = useInput(qna.password);
  const keyWord = useInput(qna.tags);
  const writer = useInput(qna.writer);
  const content = useInput(qna.q);
  const isPass = useSwitch(false);
  const pwdInput = useInput("");

  return (
    <div>
      <Header />
      {isPass.value ? (
        <Write
          title={title}
          language={language}
          password={password}
          keyWord={keyWord}
          writer={writer}
          content={content}
        />
      ) : (
        <Password
          password={password.value}
          isPass={isPass}
          pwdInput={pwdInput}
        />
      )}
      <Footer />
    </div>
  );
};

export default UpdatePage;
