import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherCustomButtonProps }) => (
  <button className={`${inverted ? "inverted" : ""} custom-button`} {...otherCustomButtonProps}>
    {children}
  </button>
);

export default CustomButton;
