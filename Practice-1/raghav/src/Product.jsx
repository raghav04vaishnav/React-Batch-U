import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useTheme from "./useTheme.jsx";
import useView from "./useView.jsx";

function Product({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const { view, viewToggle } = useView();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      setData(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  // API Call
  useEffect(() => {
    fetchData();
  }, []);

  const handleViewDetails = (item) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = existingUsers.some((user) => user.id === item.id);

    if (alreadyExists) {
      console.log("User already localStorage me hai");
    } else {
      const updatedUsers = [...existingUsers, item];

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      console.log("New user localStorage me save:", item);
    }

    navigate(`/productDetails/${item.id}`, {
      state: {
        mno: item,
        name: "Raghav",
        age: 22,
      },
    });
  };

  const addToCart = (item) => {
    const alreadyExist = cart.some((cartItem) => cartItem.id === item.id);

    if (alreadyExist) {
      alert("User already added to cart 🛒");
      return;
    }

    setCart((prevCart) => [...prevCart, item]);

    alert("User added to cart successfully 🛒");
  };

  const filterData = [...data]
    .filter((item) =>
      `${item.firstName} ${item.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "low") {
        return a.age - b.age;
      }

      if (sort === "high") {
        return b.age - a.age;
      }

      return 0;
    });

  return (
    <div
      className={`min-h-screen px-5 py-10 transition-colors duration-300 ${
        theme ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-800"
      }`}
    >
      {/* Theme + View Button */}
      <div className="mb-6 flex justify-end gap-3">
        {/* Theme */}
        <button
          onClick={toggleTheme}
          className={`rounded-lg px-5 py-2 font-semibold ${
            theme ? "bg-white text-black" : "bg-slate-900 text-white"
          }`}
        >
          {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* View Toggle */}
        <button
          onClick={viewToggle}
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
        >
          {view === "card" ? "📋 Show Table" : "🃏 Show Cards"}
        </button>
      </div>

      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Users Dashboard</h1>

        <p className={`mt-2 ${theme ? "text-slate-400" : "text-slate-500"}`}>
          Search users and view details
        </p>
      </div>

      {/* Search + Sort */}
      <div className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-4">
        <input
          type="search"
          value={search}
          placeholder="🔍 Search user..."
          onChange={(e) => setSearch(e.target.value)}
          className={`w-full rounded-xl border px-5 py-3 outline-none sm:w-96 ${
            theme
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-300 bg-white text-slate-700"
          }`}
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={`rounded-xl border px-5 py-3 outline-none ${
            theme
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-300 bg-white text-slate-700"
          }`}
        >
          <option value="">Sort By Age</option>

          <option value="low">Age: Low → High</option>

          <option value="high">Age: High → Low</option>
        </select>
      </div>

      {filterData.length === 0 ? (
        /* No Data */
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold">No users found 😕</h2>
        </div>
      ) : view === "card" ? (
        /* ================= CARD VIEW ================= */

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterData.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-2xl p-6 text-center shadow-md ${
                theme ? "bg-slate-800" : "bg-white"
              }`}
            >
              <img
                src={item.image}
                alt={`${item.firstName} ${item.lastName}`}
                className="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-blue-100 object-cover"
              />

              <h2 className="text-xl font-bold">
                {item.firstName} {item.lastName}
              </h2>

              <p className="mt-3">Age: {item.age}</p>

              <p
                className={`mt-2 truncate text-sm ${
                  theme ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {item.email}
              </p>

              <button
                onClick={() => handleViewDetails(item)}
                className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
              >
                View User Details →
              </button>

              <button
                onClick={() => addToCart(item)}
                className="mt-3 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
              >
                🛒 Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* ================= TABLE VIEW ================= */

        <div className="mx-auto max-w-7xl overflow-x-auto">
          <table
            className={`w-full rounded-xl shadow-lg ${
              theme ? "bg-slate-800" : "bg-white"
            }`}
          >
            <thead>
              <tr className={theme ? "bg-slate-700" : "bg-slate-200"}>

                <th className="px-6 py-4">Name</th>

                <th className="px-6 py-4">Age</th>

                <th className="px-6 py-4">Email</th>

                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filterData.map((item) => (
                <tr
                  key={item.id}
                  className={`border-t ${
                    theme ? "border-slate-700" : "border-slate-200"
                  }`}
                >
                  

                  <td className="px-6 py-4 text-center">
                    {item.firstName} {item.lastName}
                  </td>

                  <td className="px-6 py-4 text-center">{item.age}</td>

                  <td className="px-6 py-4 text-center">{item.email}</td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => addToCart(item)}
                      className="ml-2 rounded-lg bg-green-600 px-4 py-2 text-white"
                    >
                      🛒
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Product;
