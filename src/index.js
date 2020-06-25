import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Restaurant from "./components/pages/Island/Restaurant/Restaurant";
import RestaurantDetail from "./components/pages/Island/Restaurant/RestaurantDetail";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Restaurant} /> */}
      <Route exact path="/" component={RestaurantDetail} />
      <Route path="/search/:id/restaurant" component={Restaurant} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
