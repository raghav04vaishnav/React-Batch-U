import React, { useState } from "react";
import { useSelector } from "react-redux";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.user.user)
  console.log("Signup User:", user);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please Signup first");
      return;
    }

    if (data.email === user.email && data.password === user.password) {
      alert("Login Successfully");
    } else {
      alert("Invalid Email and Password");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Email: </label>

      <input
        type="email"
        value={data.email}
        placeholder="enter your email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <label>Password: </label>

      <input
        type="password"
        value={data.password}
        placeholder="enter your password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
