import { createContext, useState, useEffect } from "react";
import { authListner, createUserDocumentFromAuth } from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const thing = authListner((user) => {
      console.log("listner", user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return thing;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
