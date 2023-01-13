import React from "react";
import { useState, useContext } from "react";
import {
  // createAuthUserWithEmail,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/users.context";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);
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
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      setCurrentUser(response.user);
    } catch (error) {
      //! bad practise not good for security
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.error("signInUserWithEmailAndPassword", error);
      }
    }
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
