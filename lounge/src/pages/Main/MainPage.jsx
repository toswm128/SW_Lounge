import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Menu from "../../components/Menu/Menu";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Main></Main>
      <Footer />
    </div>
  );
};

export default MainPage;
