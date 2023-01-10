import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmail,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password must match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmail(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("email already in use");
      console.error("createAuthUserWithEmail", error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <br />
        <FormInput
          label="user name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Button buttonType="inverted">sign in</Button>
      </form>
    </div>
  );
}

export default SignInForm;
