import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

// import "./sign-in.styles.css";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
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
    <div className="google-sign-in-button">
      {/*  */}
      <button onClick={logWithGoogle} type="button">
        <b>Google</b>
      </button>
      {/*  */}
      <button onClick={signInWithGoogleRedirect} type="button">
        <b>Google_Redirect</b>
      </button>
      {/*  */}
      <SignUpForm />
    </div>
  );
}

export default SignIn;
