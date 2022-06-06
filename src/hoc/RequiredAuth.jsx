import React,{useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const RequiredAuth = ({ children }) => {
  const {isAuth}=useContext(AuthContext);
  if(!isAuth){
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default RequiredAuth;
