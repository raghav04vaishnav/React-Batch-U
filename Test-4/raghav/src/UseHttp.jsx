import axios from "axios";
import React, { useEffect, useState } from "react";

function UseHttp(url) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function get() {
    try {
      setLoading(true);

      const res = await axios.get(url);
      setUsers(res.data.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [url]);

  return { users, loading, error, get };
}

export default UseHttp;
