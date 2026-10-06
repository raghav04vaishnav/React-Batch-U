import axios from "axios";
import React, { useEffect, useEffectEvent, useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  const fetchData = useEffectEvent(async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setData(res.data.products);
    console.log(res.data.products);
  });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <p>Id: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
