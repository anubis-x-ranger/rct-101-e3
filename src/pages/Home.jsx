import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import axios from "axios";
const Home = () => {
  const [products,setProducts]=useState([]);
  useEffect(() => {
    getdata()
  }, [])
  function getdata(){
    axios.get('http://localhost:8080/products').then((res)=>{
      setProducts(res.data);
      console.log(res);
    });
  }

  return <div>
    <Products products={products}/>
  </div>;
};

export default Home;
