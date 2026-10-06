import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useTheme from "./useTheme.jsx";
import useView from "./useView.jsx";
import { setProducts, setSearch, setSort, setLoading, setError, } from "./slice/productSlice.js";
import { addToCart } from "./slice/cartSlice.js";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, search, sort, loading, error } = useSelector(
    (state) => state.products,
  );

  const cart = useSelector((state) => state.cart);
  const { theme, toggleTheme } = useTheme();
  const { view, viewToggle } = useView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await axios.get("https://dummyjson.com/products");
        dispatch(setProducts(res.data.products));
      } catch (error) {
        dispatch(setError("Failed to fetch Products"));
      } finally {
        dispatch(setLoading(false));
      }
    };
    if (data.length === 0) {
      fetchData();
    }
  }, [dispatch, data.length]);

  const handleViewDetails = (item) => {
    navigate(`/productDetails/${item.id}`, {
      state: {
        product: item,
      },
    });
  };

  const handleAddToCart = (item) => {
    const exists = cart.some((product) => product.id === item.id);

    if (exists) {
      alert("Product already added to cart 🛒");
      return;
    }

    dispatch(addToCart(item));

    alert("Product added to cart successfully 🛒");
  };

  const filterData = [...data]
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      return 0;
    });

  if (loading) {
    return (
      <div className="min-h-screen p-10 text-center text-2xl">
        Loading Products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-10 text-center text-red-500">{error}</div>
    );
  }

  return (
    <div
      className={`min-h-screen px-5 py-10 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-800"
      }`}
    >
      <div className="mb-6 flex justify-end gap-3">
        <button
          onClick={toggleTheme}
          className={`rounded-lg px-5 py-2 font-semibold ${
            theme === "dark" ? "bg-white text-black" : "bg-slate-900 text-white"
          }`}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button
          onClick={viewToggle}
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white"
        >
          {view === "card" ? "📋 Show Table" : "🃏 Show Cards"}
        </button>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Products Dashboard</h1>

        <p className="mt-2 text-slate-500">Search products and view details</p>
      </div>

      <div className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-4">
        <input
          type="search"
          value={search}
          placeholder="🔍 Search product..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className={`w-full rounded-xl border px-5 py-3 sm:w-96 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-300 bg-white text-slate-700"
          }`}
        />

        <select
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
          className={`rounded-xl border px-5 py-3 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-300 bg-white text-slate-700"
          }`}
        >
          <option value="">Sort By Price</option>

          <option value="low">Price: Low → High</option>

          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {filterData.length === 0 ? (
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold">No products found 😕</h2>
        </div>
      ) : view === "card" ? (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterData.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 text-center shadow-md ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              }`}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="mx-auto mb-5 h-40 w-full object-contain"
              />

              <h2 className="text-xl font-bold">{item.title}</h2>

              <p className="mt-3 text-lg font-semibold text-green-500">
                ${item.price}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Category: {item.category}
              </p>

              <p className="mt-2">⭐ {item.rating}</p>

              <button
                onClick={() => handleViewDetails(item)}
                className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
              >
                View Product Details →
              </button>

              <button
                onClick={() => handleAddToCart(item)}
                className="mt-3 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white"
              >
                🛒 Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <table
            className={`w-full rounded-xl shadow-lg ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <thead>
              <tr
                className={`${
                  theme === "dark"
                    ? "bg-slate-700 text-white"
                    : "bg-slate-200 text-slate-800"
                }`}
              >
                <th className="px-6 py-4">ID</th>

                <th className="px-6 py-4">Product</th>

                <th className="px-6 py-4">Price</th>

                <th className="px-6 py-4">Category</th>

                <th className="px-6 py-4">Rating</th>

                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filterData.map((item) => (
                <tr key={item.id} className="border-t border-slate-200">
                  {/* ID */}
                  <td className="px-6 py-4 text-center font-semibold">
                    {item.id}
                  </td>

                  {/* Product Name */}
                  <td className="px-6 py-4">
                    <span className="font-semibold">{item.title}</span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 text-center">${item.price}</td>

                  {/* Category */}
                  <td className="px-6 py-4 text-center">{item.category}</td>

                  {/* Rating */}
                  <td className="px-6 py-4 text-center">⭐ {item.rating}</td>

                  {/* Action */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => handleAddToCart(item)}
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
