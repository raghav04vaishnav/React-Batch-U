import axios from "axios";
import React, { useEffect, useState } from "react";

function UseHttp(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function get() {
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  useEffect(() => {
    get();
  }, []);

  return {
    data,loading,error,get
  }
}

export default UseHttp;
