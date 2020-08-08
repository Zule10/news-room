import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles.css";
import Header from "./Header";
import News from "../containers/News";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/news/category/:category?" component={News} />
        <Route path="/search/:palabra?" component={News} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
