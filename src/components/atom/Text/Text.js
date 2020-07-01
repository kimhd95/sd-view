import React from "react";
import "./Text.scss";

export const TXT22B = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={
        props.className ? props.className + " txt_22 bold" : "txt_22 bold"
      }
      children={children}
    />
  );
};

export const TXT20M = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={
        props.className ? props.className + " txt_20 medium" : "txt_20 medium"
      }
      children={children}
    />
  );
};

export const TXT18M = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={
        props.className ? props.className + " txt_18 medium" : "txt_18 medium"
      }
      children={children}
    />
  );
};

export const TXT16M = ({ children = "", ...props }) => {
  return (
    <p
      {...props}
      className={
        props.className ? props.className + " txt_16 medium" : "txt_16 medium"
      }
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
