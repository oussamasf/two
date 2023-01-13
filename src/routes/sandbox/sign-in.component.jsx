import React from "react";
import { useContext } from "react";
import { SandContext } from "../../contexts/sandbox.context";
import "./sign-in.styles.css";

function Picture() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

function SandBox() {
  const a = 5;
  const { setA } = useContext(SandContext);
  setA(a);
  return (
    <div className="img-wrapper">
      <Picture />
      <Picture />
      <Picture />
    </div>
  );
}

export default SandBox;
