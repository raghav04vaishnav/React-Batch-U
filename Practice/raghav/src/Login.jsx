import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    console.log(">>>> Login", form);

    localStorage.setItem("user", JSON.stringify(form));

    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to access the Home page
          </p>
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-medium text-gray-700">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your Email ID"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;