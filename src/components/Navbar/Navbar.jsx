import React from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./navbar.module.css"
// use react-router Link or NavLink


const Navbar = () => {
  const {cart}=useContext(CartContext);
  const handleLogout=()=>{
    // console.log("logout")
  }
  return (
    <div data-cy="navbar" className={styles.nav}>
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <span data-cy="navbar-cart-items-count">CART :{` ( ${cart} )`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogout()}>Logout</button>
    </div>
  );
};

export default Navbar;
