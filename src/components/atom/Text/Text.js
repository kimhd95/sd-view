import React from "react";
import "./Text.scss";

export const TXT22B = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={props.className ? props.className + " txt_22b" : "txt_22b"}
      children={children}
    />
  );
};

export const TXT20M = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={props.className ? props.className + " txt_20m" : "txt_20m"}
      children={children}
    />
  );
};

export const TXT16 = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={props.className ? props.className + " txt_16" : "txt_16"}
      children={children}
    />
  );
};

export const TXT14 = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={props.className ? props.className + " txt_14" : "txt_14"}
      children={children}
    />
  );
};

export const TXT12 = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={props.className ? props.className + " txt_12" : "txt_12"}
      children={children}
    />
  );
};
