import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import QnaListPage from "../pages/QnaList/QnaListPage";
import WritePage from "../pages/Write/WritePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/qna" component={QnaListPage} />
        <Route path="/write" component={WritePage} />
      </Switch>
    </Router>
  );
};

export default App;
