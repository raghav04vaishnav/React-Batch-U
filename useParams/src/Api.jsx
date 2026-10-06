import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Api() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      setData(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="min-h-screen bg-slate-100 px-5 py-10">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800">Users Dashboard</h1>

        <p className="mt-2 text-slate-500">Search users and view details</p>
      </div>

      {/* Search + Sort */}
      <div className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-4">
        <input
          type="search"
          value={search}
          placeholder="🔍 Search user..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:w-96"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm outline-none focus:border-blue-500"
        >
          <option value="">Sort By Age</option>
          <option value="low">Age: Low → High</option>
          <option value="high">Age: High → Low</option>
        </select>
      </div>

      {/* Users Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterData.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="mb-5 flex justify-center">
              <img
                src={item.image}
                alt={`${item.firstName} ${item.lastName}`}
                className="h-28 w-28 rounded-full border-4 border-blue-100 object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-slate-800">
              {item.firstName} {item.lastName}
            </h2>

            {/* Age */}
            <p className="mt-3 text-slate-600">
              Age:{" "}
              <span className="font-semibold text-slate-800">{item.age}</span>
            </p>

            {/* Email */}
            <p className="mt-2 truncate text-sm text-slate-500">{item.email}</p>

            {/* Button */}
            <button
              onClick={() =>
                navigate(`/productDetails/${item.id}`, {
                  state: {
                    mno: item,
                    name: "Raghav",
                    age: 21,
                  },
                })
              }
              className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white duration-300 hover:bg-blue-700"
            >
              View User Details →
            </button>
          </div>
        ))}
      </div>

      {/* No Data */}
      {filterData.length === 0 && (
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-600">
            No users found 😕
          </h2>

          <p className="mt-2 text-slate-400">
            Try searching with another name.
          </p>
        </div>
      )}
    </div>
  );
}

export default Api;
