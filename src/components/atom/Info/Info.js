import React from "react";
import "./Info.scss";

export const smallTitle = ({ children = "", ...props }) => {
  return <p className="smallTitle" {...props} children={children} />;
};

export const IconDesc = ({ children = "", ...props }) => {
  return <p className="smallTitle" {...props} children={children} />;
};
