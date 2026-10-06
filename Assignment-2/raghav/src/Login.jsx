import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useTheme from "./useTheme";
import { login } from "./slice/loginSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useTheme("loginTheme");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    navigate("/product");
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center p-6 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl p-8 shadow-xl ${
          theme === "dark" ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Login</h1>

          <button
            onClick={toggleTheme}
            className="rounded-lg bg-slate-900 px-4 py-2 text-white"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full rounded-lg border px-4 py-3 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Password</label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full rounded-lg border px-4 py-3 text-black"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" />

            <label htmlFor="remember">Remember me</label>
          </div>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full rounded-lg bg-slate-500 px-5 py-3 font-bold text-white"
          >
            Back Home
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
