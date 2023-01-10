import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import Button from "../../components/button/button.component";
import "./sign-in.styles.css";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

function SignIn() {
  //
  useEffect(() => {
    const fun = async () => {
      const res = await getRedirectResult(auth);
      await createUserDocumentFromAuth(res.user);

      console.log(res);
    };
    fun();
  }, []);
  const logWithGoogle = async () => {
    //
    const { user } = await signInWithGooglePopup();
    const userdocref = await createUserDocumentFromAuth(user);
    console.log(userdocref);
  };
  //
  return (
    <div className="sign-in-container">
      <div>
        <Button buttonType="google" onClick={logWithGoogle}>
          <b>Google</b>
        </Button>

        <Button buttonType="google" onClick={signInWithGoogleRedirect}>
          Google_Redirect
        </Button>
      </div>

      <SignUpForm />
      <SignInForm />
    </div>
  );
}

export default SignIn;
