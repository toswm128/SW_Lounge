import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Write from "../../components/Write/Write";
import useSelect from "../../hooks/useSelect";
import useInput from "../../hooks/useInput";
import Board from "../../assets/API/Board";

const WritePage = () => {
  const title = useInput("");
  const language = useSelect("");
  const password = useInput("");
  const tag1 = useInput("");
  const tag2 = useInput("");
  const tag3 = useInput("");
  const writer = useInput("");
  const content = useInput("");

  const tryWrite = async () => {
    try {
      title.value &&
      language.value &&
      password.value &&
      tag1.value &&
      writer.value &&
      content.value
        ? await Board.postBoard({
            title: title.value,
            content: content.value,
            writer: writer.value,
            language: language.value,
            password: password.value,
            tag1: tag1.value,
            tag2: tag2.value,
            tag3: tag3.value,
          })
        : alert(
            "입력을 해주세요",
            title.value,
            language.value,
            password.value,
            tag1.value,
            tag2.value,
            tag3.value,
            writer.value,
            content.value
          );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <Write
        title={title}
        language={language}
        password={password}
        keyWord={tag1}
        keyWord1={tag2}
        keyWord2={tag3}
        writer={writer}
        content={content}
        tryWrite={tryWrite}
      />
      <Footer />
    </div>
  );
};

export default WritePage;
