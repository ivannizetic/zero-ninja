import React, { createContext } from "react";
import app from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const FirebaseContext = createContext(null);
export { FirebaseContext };

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  if (!app.apps.length) {
    app.initializeApp(firebaseConfig.firebaseConfig);
  }
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};
