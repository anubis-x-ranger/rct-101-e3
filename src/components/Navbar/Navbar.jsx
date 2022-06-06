import React from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
// use react-router Link or NavLink


const Navbar = () => {
  const {cart}=useContext(CartContext)
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <span data-cy="navbar-cart-items-count">CART :{` ( ${cart} )`}</span>
      <button data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
