import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import QnaListPage from "../pages/QnaList/QnaListPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/qna" component={QnaListPage} />
      </Switch>
    </Router>
  );
};

export default App;
