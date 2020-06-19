import React from "react";
import "./Text.scss";

export const Title = ({ children = "", ...props }) => {
  return <p className="title" {...props} children={"# " + children} />;
};
