import React from "react";
import "./Image.scss";

export const MainBanner = ({ src, alt }) => {
  return <img className="main_banner" src={src} alt={alt} />;
};

export const PerViewBanner = ({ src, alt }) => {
  return <img className="per_banner" src={src} alt={alt} />;
};

export const LargeThumb = ({ src, ...props }) => {
  return <img className="large_thumb" src={src} {...props} />;
};

export const SmallThumb = ({ src, ...props }) => {
  return <img className="small_thumb" src={src} {...props} />;
};
