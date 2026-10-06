import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./counter/ProductSlice.js";

function ProductList() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Product List</h1>

      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>

          <img src={product.image} alt={product.title} width="150" />

          <p>Price: ${product.price}</p>

          <p>{product.description}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
