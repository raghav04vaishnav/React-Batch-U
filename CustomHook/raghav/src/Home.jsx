import React from "react";
import UseHttp from "./UseHttp";

function Home() {
  const { data, loading, error } = UseHttp("https://dummyjson.com/products");

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>error: {error}</h1>;
  }

  console.log(">>>>>>home>>>>data", data);
  return <div>{
    data.products.map((item)=> (
        <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} width="150"/>
            <h2>Title: {item.title}</h2>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <hr/>
        </div>
    ))
  }</div>;
}

export default Home;
