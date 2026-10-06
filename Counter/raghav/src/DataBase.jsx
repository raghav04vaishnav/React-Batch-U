import React, { use } from "react";
import axios from "axios";

const result = axios.get("https://dummyjson.com/products");
function Data() {
  
  const mainResult = use(result);
  const ans = mainResult.data.products;
  console.log(">>>>>>>>>> answer", ans);

  return (
    <div>
      <h1>Products</h1>

      {ans.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt={product.title} width="150" />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Data;
