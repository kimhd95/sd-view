import React from "react";
import "./Icon.scss";

export const ICO12 = ({ src, alt, ...props }) => {
  return <img {...props} className="ico_12" src={src} alt={alt} />;
};

export const ICO20 = ({ src, alt, ...props }) => {
  return <img {...props} className="ico_20" src={src} alt={alt} />;
};
