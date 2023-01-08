import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import "./sign-in.styles.css";
function SignIn() {
  const logWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userdocref = await createUserDocumentFromAuth(user);
    console.log(userdocref);
  };
  return (
    <div className="google-sign-in-button">
      <button onClick={logWithGoogle} type="button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt=""
        />
        <b>Google</b>
      </button>
    </div>
  );
}

export default SignIn;
