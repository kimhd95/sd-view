import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Island from "./pages/Island/IslandInfo";
import Restaurant from "./pages/Island/Restaurant";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Restaurant} />
      <Route path="/search/:id" component={Island} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
