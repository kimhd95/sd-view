import React from "react";
import { Link } from "react-router-dom";
import "./MenuTab.scss";

export const ActiveTab = ({ to = "/", children = "", ...props }) => {
  return <Link {...props} to={to} children={children} />;
};
