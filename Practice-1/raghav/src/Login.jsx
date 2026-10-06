import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "./useTheme";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Save login data
    localStorage.setItem("user", JSON.stringify(form));

    // Navigate to Product page
    navigate("/product");
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center px-5 transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-slate-100"
      }`}
    >
      <div className="w-full max-w-md">
        {/* Theme Button */}
        <div className="mb-5 flex justify-end">
          <button
            onClick={toggleTheme}
            className={`rounded-lg px-5 py-2 font-semibold ${
              theme ? "bg-white text-black" : "bg-slate-900 text-white"
            }`}
          >
            {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl p-8 shadow-xl ${
            theme ? "bg-slate-800" : "bg-white"
          }`}
        >
          <h1
            className={`mb-6 text-center text-3xl font-bold ${
              theme ? "text-white" : "text-slate-800"
            }`}
          >
            Login
          </h1>

          <div className="mb-5">
            <label
              className={`mb-2 block font-semibold ${
                theme ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your Email Id"
              value={form.email}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                theme
                  ? "border-slate-600 bg-slate-700 text-white"
                  : "border-slate-300 bg-white"
              }`}
            />
          </div>

          <div className="mb-6">
            <label
              className={`mb-2 block font-semibold ${
                theme ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={form.password}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                theme
                  ? "border-slate-600 bg-slate-700 text-white"
                  : "border-slate-300 bg-white"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;