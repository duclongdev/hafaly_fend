import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();


  const signin = (userName, callback) => {
    import("../utils/auth").then(module => {
      module.fakeAuthProvider.signin(() => {
        setUser(userName);
        callback();
      })
    })
  };

  const signout = (callback) => {
    import("../utils/auth").then(module => {
      module.fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      })
    })
  }

  const value = { user, signin, signout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};





