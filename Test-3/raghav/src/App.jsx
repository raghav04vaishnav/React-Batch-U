import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import axios from "axios";
import Cart from "./Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  const [data1, setData1] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (!savedCart || savedCart === "undefined") {
      return [];
    }
    return JSON.parse(savedCart);
  });

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData1(res.data);
    console.log(">>>>>>>App ka Data", res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={<Home data1={data1} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
