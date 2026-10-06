import axios from "axios";
import React, { useEffect } from "react";

function Users({ onData }) {
  const getUsers = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      onData(res.data.products);

      console.log("Users:", res.data.products);
    } catch (error) {
      console.log(">>>> Error", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>User Component</h2>
    </div>
  );
}

export default Users;