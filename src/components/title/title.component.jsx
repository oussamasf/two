import React from "react";
import "./title.styles.css";
function Title({ category }) {
  return (
    <div className="title-category">
      <h1>{category}</h1>
    </div>
  );
}

export default Title;
