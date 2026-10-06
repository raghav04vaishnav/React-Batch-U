import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    city: "",
    state: "",
    country: "",
  });

  console.log(">>>>form", form);

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
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
  };

  const inputStyle = "w-full border border-gray-300 p-2.5 rounded-lg";
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl w-100"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6 p-6">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="text-sm text-gray-600">FirstName</label>
          <input
            type="text"
            placeholder="Enter your FirstName"
            value={form.firstName}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.firstName}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">LastName</label>
          <input
            type="text"
            placeholder="Enter your LastName"
            value={form.lastName}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.lastName}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Age</label>
          <input
            type="number"
            placeholder="18"
            value={form.age}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.age}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={form.email}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.email}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={form.password}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.password}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={form.confirmPassword}
            className={inputStyle}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          <p style={{ color: "red" }}>{error.confirmPassword}</p>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Phone No: </label>
          <input
            type="tel"
            placeholder="9876543210"
            value={form.phoneNumber}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.phoneNumber}</p>
        </div>

        <div className="mb-5">
          <label className="text-sm text-gray-600">Gender</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="male"
                checked={form.gender === "male"}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
              <p style={{ color: "red" }}>{error.gender}</p>
              <span>Male</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="female"
                checked={form.gender === "female"}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
              <p style={{ color: "red" }}>{error.gender}</p>
              <span>Female</span>
            </label>
          </div>
        </div>

        <div className="mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            Date of Birth:{" "}
          </label>
          <input
            type="date"
            value={form.dob}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
          <p style={{ color: "red" }}>{error.dob}</p>
        </div>

        <div className="mb-5">
          <label className="flex items-center gap-2 cursor-pointer">City</label>
          <select
            value={form.city}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          >
            <option value="">Select your City</option>
            <option value="Kota">Kota</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ajmer">Ajmer</option>
            <option value="Bhilwara">Bhilwara</option>
            <option value="Udaipur">Udaipur</option>
          </select>
          <p style={{ color: "red" }}>{error.city}</p>
        </div>

        <div className="mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            State
          </label>
          <select
            value={form.state}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          >
            <option value="">Select your State</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Haryana">Haryana</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="UttarPradesh">Uttar Pradesh</option>
          </select>
          <p style={{ color: "red" }}>{error.state}</p>
        </div>

        <div className="mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            Country
          </label>
          <select
            value={form.country}
            className={inputStyle}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          >
            <option value="">Select your Country</option>
            <option value="India">India</option>
            <option value="Dubai">Dubai</option>
            <option value="SouthKorea">South Korea</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
          </select>
          <p style={{ color: "red" }}>{error.country}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600"
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
