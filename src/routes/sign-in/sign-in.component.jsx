import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase";
function SignIn() {
  const logWithGoogle = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      <button onClick={logWithGoogle}>signin</button>
    </div>
  );
}

export default SignIn;
