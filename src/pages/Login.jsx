import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const {toggle}=useContext(AuthContext)
  const navigate = useNavigate()  
 
    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("https://reqres.in/api/login",
    {
      "email":email,
      "password": password
    })
    .then(function (response) {
      console.log(response.data);
      if(response.data){
        toggle(true);
        navigate("/")
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  
    
 
  
  return (
    <div>
      <input data-cy="login-email"  value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email..."/>
      <input data-cy="login-password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password..." />
      <button data-cy="login-submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
