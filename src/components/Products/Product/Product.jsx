import React, { useContext } from "react";
import styles from "./product.module.css"
import { CartContext } from "../../../context/CartContext";
const Product = ({product}) => {
  const {cart,addToCart}=useContext(CartContext)
 
  return (
    <div data-cy={`product-${product.id}`} className={styles.border}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addToCart(product.id)}>Add Product</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;
