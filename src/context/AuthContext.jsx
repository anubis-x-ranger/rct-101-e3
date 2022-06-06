import React, { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
   const [isAuth,toggleAuth]=useState(false);

    const toggle=(value)=>{
     toggleAuth(value);
    }
  return <AuthContext.Provider value={{isAuth,toggle}}>{children}</AuthContext.Provider>;
};
