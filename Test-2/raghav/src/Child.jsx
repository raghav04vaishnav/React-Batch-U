import axios from "axios";
import React, { useEffect, useState } from "react";

function Child({ sendData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/carts");

      setData(res.data.carts);

      // Child data Home ko callback se bhejna
      sendData(res.data.carts);

      console.log("Child Data:", res.data.carts);
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
    return <h2 className="text-center">Loading Child data....</h2>;
  }

  return (
    <div className="text-center mb-5">
      <p className="text-green-600 font-semibold">Child Data Loaded</p>

      <p>Child Data Length: {data.length}</p>
    </div>
  );
}

export default Child;
