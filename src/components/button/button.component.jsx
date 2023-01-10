import React from "react";
import "./button.styles.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
function Button({ children, buttonType, ...othertypes }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...othertypes}
    >
      {children}
    </button>
  );
}

export default Button;
