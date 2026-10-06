import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./Home.jsx";

function App() {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/carts");
    setProduct(res?.data?.carts);
    console.log(res?.data?.carts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Home home={product}/>
    </div>
  )
}

export default App;
