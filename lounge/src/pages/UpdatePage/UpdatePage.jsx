import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Write from "../../components/Write/Write";
import Footer from "../../components/Footer/Footer";
import useInput from "../../hooks/useInput";
import useSelect from "../../hooks/useSelect";
import Password from "../../components/Password/Password";
import useSwitch from "../../hooks/useSwitch";
import Delete from "../../components/Delete/Delete";
import DetailAPI from "../../assets/API/DetailAPI";

const UpdatePage = () => {
  const title = useInput();
  const language = useSelect();
  const password = useInput();
  const tag1 = useInput();
  const tag2 = useInput();
  const tag3 = useInput();
  const writer = useInput();
  const content = useInput();

  const getDetail = async () => {
    await DetailAPI.getDetail(query * 1).then(current => {
      const qna = current.data;
      title.setValue(qna.title);
      language.setValue(qna.language);
      password.setValue(qna.password);
      tag1.setValue(qna.tag1);
      tag2.setValue(qna.tag2);
      tag3.setValue(qna.tag3);
      writer.setValue(qna.writer);
      content.setValue(qna.content);
    });
  };

  useEffect(() => {
    getDetail();
  }, []);

  const history = useHistory();
  //쿼리 스트링
  const query = history.location.search.split("=")[1];
  // 해당하는 데이터만 필터

  const updateQna = async () => {
    console.log(
      title.value,
      content.value,
      writer.value,
      language.value,
      password.value,
      tag1.value,
      tag2.value,
      tag3.value,
      query * 1
    );
    DetailAPI.updateBoard({
      title: title.value,
      content: content.value,
      writer: writer.value,
      language: language.value,
      password: password.value,
      tag1: tag1.value,
      tag2: tag2.value,
      tag3: tag3.value,
      id: query * 1,
    });
  };

  const isPass = useSwitch(false);
  const pwdInput = useInput("");
  return (
    <div>
      <Header />
      {isPass.value ? (
        <>
          <Write
            title={title}
            language={language}
            password={password}
            tag1={tag1}
            tag2={tag2}
            tag3={tag3}
            writer={writer}
            content={content}
            tryWrite={updateQna}
            isPass={isPass}
          />
          <Delete />
        </>
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
