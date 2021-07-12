import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Write from "../../components/Write/Write";
import useSelect from "../../hooks/useSelect";
import useInput from "../../hooks/useInput";

const WritePage = () => {
  const title = useInput("");
  const language = useSelect("");
  const password = useInput("");
  const keyWord = useInput("");
  const writer = useInput("");
  const content = useInput("");
  return (
    <div>
      <Header />
      <Write
        title={title}
        language={language}
        password={password}
        keyWord={keyWord}
        writer={writer}
        content={content}
      />
      <Footer />
    </div>
  );
};

export default WritePage;
