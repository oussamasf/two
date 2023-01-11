import React from "react";
import { useState } from "react";
// import {
//   createAuthUserWithEmail,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);
  //
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userdocref = await createUserDocumentFromAuth(user);
    console.log(userdocref);
  };
  //
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };
  return (
    <div className="sign-in-container">
      <h2>Sign in using email</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button buttonType="inverted">sign in</Button>
      </form>

      <Button onClick={signInWithGoogle} buttonType="google">
        google sign in
      </Button>
    </div>
  );
}

export default SignInForm;
