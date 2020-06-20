import React from "react";
import "./Text.scss";

export const Title = ({ children = "", ...props }) => {
  return <p className="title" {...props} children={"# " + children} />;
};

export const LargeTitle = ({ children = "", ...props }) => {
  return <p className="large_title" {...props} children={children} />;
};

export const MediumTitle = ({ children = "", ...props }) => {
  return <p className="medium_title" {...props} children={children} />;
};

export const SmallTitle = ({ children = "", ...props }) => {
  return <p className="small_title" {...props} children={children} />;
};

export const SubTitle = ({ children = "", ...props }) => {
  return <p className="sub_title" {...props} children={children} />;
};
