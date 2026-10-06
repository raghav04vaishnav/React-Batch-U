import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useTheme from "./useTheme";

function ProductDetails({ wishlist, setWishlist }) {
  const [data, setData] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { mno, name, age } = location?.state || {};

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (mno) {
      setData(mno);
      console.log("Data useLocation se aaya:", mno);
      console.log("Name:", name);
      console.log("Age:", age);
      return;
    }
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const savedUser = savedUsers.find((user) => user.id === Number(id));

    if (savedUser) {
      console.log("Data localStorage se mila:", savedUser);
      setData(savedUser);
      return;
    }
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        const user = res.data.users.find((item) => item.id === Number(id));
        console.log("API DATA:", user);
        setData(user || null);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, mno, name, age]);

  //Add to Wishlist
  const addToWishlist = () => {
    const alreadyExist = wishlist.some((item) => item.id === data.id);
    if (alreadyExist) {
      alert(`User already added to wishlist ❤️`);
      return;
    }
    setWishlist((prevWishlist) => [...prevWishlist, data]);
    alert(`User added to wishlist ❤️`);
  };

  // Loading
  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-200">
        <h2 className="text-2xl font-semibold text-slate-600">Loading... ⏳</h2>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-5 py-10 transition-colors duration-300 ${
        theme ? "bg-slate-950 text-white" : "bg-slate-100"
      }`}
    >
      {/* Theme Button */}
      <div className="mx-auto mb-6 flex max-w-6xl justify-end">
        <button
          onClick={toggleTheme}
          className={`rounded-lg px-5 py-2 font-semibold ${
            theme ? "bg-white text-black" : "bg-slate-900 text-white"
          }`}
        >
          {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Back */}
      <div className="mx-auto mb-6 max-w-5xl">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-slate-700 px-5 py-2.5 font-semibold text-white hover:bg-slate-800"
        >
          ← Back
        </button>
      </div>

      {/* Card */}
      <div
        className={`mx-auto grid max-w-6xl gap-10 rounded-3xl p-6 shadow-xl md:grid-cols-2 ${
          theme ? "bg-slate-800" : "bg-white"
        }`}
      >
        {/* Image */}
        <div
          className={`flex items-center justify-center rounded-2xl p-6 ${
            theme ? "bg-slate-700" : "bg-slate-50"
          }`}
        >
          <img
            src={data.image}
            alt={`${data.firstName} ${data.lastName}`}
            className="h-80 w-full object-contain"
          />
        </div>

        {/* Information */}
        <div className="flex flex-col justify-center">
          <h1
            className={`text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-800"
            }`}
          >
            {data.firstName} {data.lastName}
          </h1>

          <p className={`mt-2 ${theme ? "text-slate-400" : "text-slate-500"}`}>
            @{data.username}
          </p>

          <div
            className={`mt-6 rounded-xl p-5 ${
              theme ? "bg-slate-700" : "bg-slate-50"
            }`}
          >
            <p className="text-sm text-slate-500">Age</p>
            <h2 className="text-3xl font-bold text-blue-600">{data.age}</h2>
          </div>

          <div
            className={`mt-6 rounded-xl p-5 ${
              theme ? "bg-slate-700" : "bg-blue-50"
            }`}
          >
            <p className="text-sm text-slate-500">Email</p>

            <h2 className="mt-1 break-all font-semibold text-blue-600">
              {data.email}
            </h2>
          </div>

          <div
            className={`mt-6 rounded-xl p-5 ${
              theme ? "bg-slate-700" : "bg-green-50"
            }`}
          >
            <p className="text-sm text-slate-500">Phone</p>

            <h2 className="mt-1 font-semibold text-green-600">{data.phone}</h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div
              className={`rounded-xl border p-4 ${
                theme ? "border-slate-600" : "border-slate-200"
              }`}
            >
              <p className="text-sm text-slate-500">Gender</p>

              <p className="mt-1 text-xl font-bold capitalize">{data.gender}</p>
            </div>

            <div
              className={`rounded-xl border p-4 ${
                theme ? "border-slate-600" : "border-slate-200"
              }`}
            >
              <p className="text-sm text-slate-500">Blood Group</p>

              <p className="mt-1 text-xl font-bold">{data.bloodGroup}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div
              className={`rounded-xl border p-4 ${
                theme ? "border-slate-600" : "border-slate-200"
              }`}
            >
              <p className="text-sm text-slate-500">Height</p>

              <p className="mt-1 text-lg font-bold">{data.height} cm</p>
            </div>

            <div
              className={`rounded-xl border p-4 ${
                theme ? "border-slate-600" : "border-slate-200"
              }`}
            >
              <p className="text-sm text-slate-500">Weight</p>

              <p className="mt-1 text-lg font-bold">{data.weight} kg</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-slate-500">Address</p>

            <p className="text-lg font-bold">
              {data.address?.address}, {data.address?.city}
            </p>
          </div>

          <button
            onClick={addToWishlist}
            className="mt-8 w-full rounded-xl bg-pink-600 px-5 py-3 font-bold text-white hover:bg-pink-700"
          >
            ❤️ Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
