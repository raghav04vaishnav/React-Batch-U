import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Products() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get("https://fakestoreapi.com/products");

      setData(res.data);
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toggle) {
      fetchData();
    } else {
      setData([]);
    }
  }, [toggle]);

  const changeData = () => {
    setToggle((prev) => !prev);
  };

  const filteredData = data
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">
        Products
      </h1>

      <div className="flex flex-col md:flex-row gap-3 justify-center items-center mb-8">
        <button
          onClick={changeData}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {toggle ? "Hide Products" : "Show Products"}
        </button>

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-80"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-40"
        >
          <option value="">Choose</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {loading && (
        <p className="text-center text-blue-600 text-xl mb-6">Loading...</p>
      )}

      {error && (
        <p className="text-center text-red-500 text-xl mb-6">{error}</p>
      )}

      {!loading && toggle && filteredData.length === 0 && (
        <p className="text-center text-gray-500 text-xl">No products found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition overflow-hidden"
          >
            <div className="w-58 h-65 flex items-center justify-center bg-gray-50 rounded-lg mb-4 p-4 overflow-hidden">
              <LazyLoadImage
                alt={item.title}
                src={item.image}
                effect="blur"
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {item.description}
            </p>

            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="font-semibold text-blue-600">
                {item.category}
              </span>
            </p>

            <p className="text-lg font-bold text-green-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
