import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";

function Api() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const ans = await axios.get("https://dummyjson.com/products");

      setProducts(ans.data.products);

      console.log("Products:", ans.data.products);
    } catch (error) {
      console.log(">>>> Error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Home products={products} />
  );
}

export default Api;