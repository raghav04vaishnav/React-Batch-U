import axios from "axios";
import React, { useEffect, useState } from "react";

function UseHttp(url) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function get() {
    if (!url) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await axios.get(url);

      setProduct(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [url]);

  return {
    product,
    error,
    loading,
    get,
  };
}

export default UseHttp;
