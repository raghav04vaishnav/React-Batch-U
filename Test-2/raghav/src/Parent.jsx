import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";

function Parent() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/carts");

      setCarts(res.data.carts);

      console.log("Parent Data:", res.data.carts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-3xl mt-10">Loading Parent data....</h2>
    );
  }

  return (
    <div>
      <Home carts={carts} />
    </div>
  );
}

export default Parent;
