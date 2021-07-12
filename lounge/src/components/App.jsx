import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";
import MainPage from "../pages/MainPage/MainPage";
import QnaListPage from "../pages/QnaListPage/QnaListPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import WritePage from "../pages/WritePage/WritePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/qna" component={QnaListPage} />
        <Route path="/write" component={WritePage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/update" component={UpdatePage} />
      </Switch>
    </Router>
  );
};

export default App;
