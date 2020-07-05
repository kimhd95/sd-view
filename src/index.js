import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Restaurant from "./components/pages/Island/Restaurant/Restaurant";
import RestaurantDetail from "./components/pages/Island/Restaurant/RestaurantDetail";
import Accommodation from "./components/pages/Island/Accommodation/Accommodation";
import AccommodationDetail from "./components/pages/Island/Accommodation/AccommodationDetail";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Accommodation} /> */}
      <Route exact path="/" component={Accommodation} />
      <Route path="/search/:id/accommodation" component={Accommodation} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
