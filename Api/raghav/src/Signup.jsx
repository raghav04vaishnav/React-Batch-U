import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

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

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

    if (
      form.password !== "" &&
      form.confirmPassword !== "" &&
      form.password !== form.confirmPassword
    ) {
      obj.confirmPassword = "Password does not match";
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

      navigate("/Products");
    }
  };

  const inputStyle = "w-full border border-gray-300 p-2.5 rounded-lg";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">First Name</label>

          <input
            type="text"
            name="firstName"
            placeholder="Enter your FirstName"
            value={form.firstName}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.firstName}</p>
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Last Name</label>

          <input
            type="text"
            name="lastName"
            placeholder="Enter your LastName"
            value={form.lastName}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.lastName}</p>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Age</label>

          <input
            type="number"
            name="age"
            placeholder="18"
            value={form.age}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.age}</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={form.email}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.email}</p>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Password</label>

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.password}</p>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={form.confirmPassword}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.confirmPassword}</p>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Phone Number</label>

          <input
            type="tel"
            name="phoneNumber"
            placeholder="9876543210"
            value={form.phoneNumber}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.phoneNumber}</p>
        </div>

        {/* Gender */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">Gender</label>

          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={form.gender === "male"}
                onChange={handleChange}
              />

              <span>Male</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={form.gender === "female"}
                onChange={handleChange}
              />

              <span>Female</span>
            </label>
          </div>

          <p className="text-red-500 text-sm">{error.gender}</p>
        </div>

        {/* DOB */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">Date of Birth</label>

          <input
            type="date"
            name="dob"
            value={form.dob}
            className={inputStyle}
            onChange={handleChange}
          />

          <p className="text-red-500 text-sm">{error.dob}</p>
        </div>

        {/* City */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">City</label>

          <select
            name="city"
            value={form.city}
            className={inputStyle}
            onChange={handleChange}
          >
            <option value="">Select your City</option>
            <option value="Kota">Kota</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ajmer">Ajmer</option>
            <option value="Bhilwara">Bhilwara</option>
            <option value="Udaipur">Udaipur</option>
          </select>

          <p className="text-red-500 text-sm">{error.city}</p>
        </div>

        {/* State */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">State</label>

          <select
            name="state"
            value={form.state}
            className={inputStyle}
            onChange={handleChange}
          >
            <option value="">Select your State</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Haryana">Haryana</option>
            <option value="Delhi">Delhi</option>
            <option value="UttarPradesh">Uttar Pradesh</option>
          </select>

          <p className="text-red-500 text-sm">{error.state}</p>
        </div>

        {/* Country */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">Country</label>

          <select
            name="country"
            value={form.country}
            className={inputStyle}
            onChange={handleChange}
          >
            <option value="">Select your Country</option>
            <option value="India">India</option>
            <option value="Dubai">Dubai</option>
            <option value="SouthKorea">South Korea</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
          </select>

          <p className="text-red-500 text-sm">{error.country}</p>
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
