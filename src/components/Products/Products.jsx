import React from "react";
import Product from "./Product/Product";
import styles from "./products.module.css"
const Products = ({products}) => {
//  console.log(products);
  return <div>{/* Code here */}
  <h1>Products</h1>
  <div className={styles.container}>
 {products.map((product)=>(
   <Product key={product.id} product={product} />
 ))}
  </div>
  </div>;
};

export default Products;
