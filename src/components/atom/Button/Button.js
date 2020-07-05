import React from "react";
import "./Button.scss";

export const ViewAllButton = ({ name, src, alt, ...props }) => {
return <button type="button" className="ViewAllButton" src={src} alt={alt}>{name}</button>;
};