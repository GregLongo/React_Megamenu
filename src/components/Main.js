import React from "react";
import "../css/Main.css";
import { Switch, Route } from "react-router-dom";
import Content from "../components/Content";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Switch>
  </main>
);

export default Main;
