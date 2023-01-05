import React from "react";
import "./row.styles.css";

function Row({ name, price, bo }) {
  name = bo.red ? (
    <span>{name}</span>
  ) : (
    <span style={{ color: "red" }}>{name}</span>
  );
  return (
    <div className="row">
      {name}
      <p>{price}</p>
    </div>
  );
}

export default Row;
