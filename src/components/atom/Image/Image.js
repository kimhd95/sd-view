import React from "react";
import "./Image.scss";

export const BigThumb = ({ src, alt, ...props }) => {
  return <img {...props} className="big_thumb" src={src} alt={alt} />;
};

export const LargeThumb = ({ src, alt, ...props }) => {
  return <img {...props} className="large_thumb" src={src} alt={alt} />;
};

export const SmallThumb = ({ src, alt, ...props }) => {
  return <img {...props} className="small_thumb" src={src} alt={alt} />;
};

export const BackImg = ({ src, alt, ...props }) => {
  return <img {...props} className="back_img" src={src} alt={alt} />;
};