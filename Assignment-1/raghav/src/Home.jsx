import axios from "axios";
import React, { useEffect, useState } from "react";

function Home({ sendData }) {
  const [carts, setCarts] = useState([]);

  const fetchCarts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/carts");
      setCarts(res.data.carts);
      sendData(res.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <div className="mx-auto mt-10 rounded-xl bg-blue-600 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white">This is 1st Component</h2>

      <p className="mt-2 text-blue-100">Total Carts: {carts.length}</p>
    </div>
  );
}

export default Home;
