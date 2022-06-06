import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [state,dispatch]=useReducer();

  const cart ={};

  return <CartContext.Provider value={{cart}}>{children}</CartContext.Provider>;
};
