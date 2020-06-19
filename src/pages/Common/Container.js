import React from "react";
import { Route, Link } from "react-router-dom";

export default function Container() {
  return (
    <div className="nav_wrap">
      <ul className="nav">
        <Route
          path="/study"
          children={({ match }) => (
            <li className={match ? "on" : ""}>
              <Link to="/study" children="홈" />
            </li>
          )}
        />
        <Route
          path="/homeSchool"
          children={({ match }) => (
            <li className={match ? "on" : ""}>
              <Link to="/homeSchool" children="검색" />
            </li>
          )}
        />
        <Route
          path="/mall"
          children={({ match }) => (
            <li className={match ? "on" : ""}>
              <Link to="/mall" children="인포" />
            </li>
          )}
        />
      </ul>
    </div>
  );
}
