import axios from "axios";
import React, { useEffect, useState } from "react";

function Home({ data1, cart, setCart }) {
  const [data2, setData2] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData2(res.data);
    console.log(">>>>>>>>>Home ka Data", res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const mergeData = [...data1, ...data2];
  console.log(">>>>>>>>>>merge hua data", mergeData);

  const filterData = mergeData.filter((item) => {
    const searchMatch = item.title.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === "all" || item.category === category;

    return searchMatch && categoryMatch;
  });

  const categories = [...new Set(mergeData.map((item) => item.category))];

  const handleCart = (product) => {
    const alreadyExists = cart.some((item) => item.id === product.id);
    if (alreadyExists) {
      alert(`Product already in Cart`);
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    alert(`Product added successfully`);
  };

  const removeToCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2>Products</h2>

      <input
        type="text"
        value={search}
        placeholder="Enter Your Product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <h2>Total Products: {filterData.length}</h2>
      {filterData.length === 0 ? (
        <h2>Product Not Found</h2>
      ) : (
        filterData.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <img src={item.image} alt={item.title} width="150" />
            <p>ID: {item.id}</p>
            <h2>Title: {item.title}</h2>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <p>Rating: {item?.rating?.rate}</p>
            <button onClick={() => handleCart(item)}>Add To Cart</button>
            <button onClick={() => removeToCart(item.id)}>
              Remove From Cart
            </button>
            <hr />
          </div>
        ))
      )}
    </>
  );
}

export default Home;
