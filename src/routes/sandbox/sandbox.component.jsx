import React, { useState, useRef, useEffect } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./sign-in.styles.css";

const defaultFormFields = {
  items: "",
};

function SandBox() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { items } = formFields;
  const ousf = useRef({});

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    Object.keys(ousf.current).includes(items)
      ? (ousf.current[`${items}`] += 1)
      : (ousf.current[`${items}`] = 1);

    console.log(ousf);
    resetFormFields();
  };
  return (
    <div className="sign-up-container">
      <h2>ADD ITEM TO CART</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <FormInput
          label="items"
          type="text"
          required
          onChange={handleChange}
          name="items"
          value={items}
        />

        <Button type="submit">add to cart</Button>
      </form>
      <Button
        onClick={() => {
          ousf.current = {};
        }}
      >
        reset
      </Button>
      {ousf.current &&
        Object.keys(ousf.current).map((key) => {
          return <div className="thing">{`${key}:${ousf.current[key]}`}</div>;
        })}
    </div>
  );
}

export default SandBox;
