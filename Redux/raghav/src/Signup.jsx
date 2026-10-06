import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "./counter/userSlice";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit =(e)=>{
    e.preventDefault()
    
    dispatch(signup(form))
    navigate("/login")
    console.log(">>>>>>>Signup", form)
  }

  return (
    <form onSubmit={submit}>
      <label>Name:</label>
      <input
        type="name"
        value={form.name}
        placeholder="enter your name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label>Email:</label>
      <input
        type="email"
        value={form.email}
        placeholder="enter your email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <label>Password:</label>
      <input
        type="password"
        value={form.password}
        placeholder="enter your password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
