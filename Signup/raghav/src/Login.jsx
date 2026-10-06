import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let obj = {};
    if (form.firstName === "") {
      obj.firstName = "FirstName is required";
    }
    if (form.lastName === "") {
      obj.lastName = "LastName is required";
    }
    if (form.age === "") {
      obj.age = "Age is required";
    }
    if (form.email === "") {
      obj.email = "Email is required";
    }
    if (form.password === "") {
      obj.password = "Password is required";
    }
    if (form.confirmPassword === "") {
      obj.confirmPassword = "Confirm Password is required";
    }
    if (form.phoneNumber === "") {
      obj.phoneNumber = "Phone Number is required";
    }
    if (form.gender === "") {
      obj.gender = "Gender is required";
    }
    if (form.dob === "") {
      obj.dob = "DOB is required";
    }
    if (form.city === "") {
      obj.city = "City is required";
    }
    if (form.state === "") {
      obj.state = "State is required";
    }
    if (form.country === "") {
      obj.country = "Country is required";
    }
    setError(obj);

    if (Object.keys(obj).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
    }

    const form={email,password}
    console.log(">>>>> data is:", form)
  };

  const inputStyle = "w-full border border-gray-300 p-2.5 rounded-lg";
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-3xl shadow-xl w-100"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6 p-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            className={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Password: </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            className={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already Login?{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
