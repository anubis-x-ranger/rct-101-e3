import React, { createContext, useEffect, useReducer, useState } from "react";

 const initialstate={
  cart:[]
}

// const [cartItem, setCartItem] = useState([]);
// useEffect(() => {
//   getdata()
// },[])
// function getdata(){
//   axios.get('http://localhost:8080/products').then((res)=>{
//     setCartItem(res.data);
//     console.log(res);
//   });
// }
export const CartContext = createContext();

//reducer 
const reducer=(state,action)=>{
  switch(action.type){
  case "ADD_PRODUCT":
      return{
        ...state,cart:[action.payload, ...state.cart]
      }
    }
  }

export const CartProvider = ({ children }) => {

  const [state,dispatch]=useReducer(reducer,initialstate);
  
  const addToCart=(id)=>{
      dispatch({
        type:"ADD_PRODUCT",
        payload:id
      })
  }
  const removeFromCart=(id)=>{
    dispatch({
      type:"ADD_PRODUCT",
      payload:id
    })
  }
  return <CartContext.Provider value={{
    cart:state.cart,addToCart,removeFromCart
  }}>{children}</CartContext.Provider>;
};
