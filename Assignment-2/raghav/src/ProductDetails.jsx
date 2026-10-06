import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import useTheme from "./useTheme";
import UseHttp from "./UseHttp";
import { addToWishlist } from "./slice/wishlistSlice";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist);

  const { theme } = useTheme("productDetailsTheme");

  // Product list se aane wala product
  const result = location.state?.product;

  // Agar product Product.jsx se nahi mila,
  // to API se product fetch hoga
  const {
    product: apiData,
    loading,
    error,
  } = UseHttp(result ? null : `https://dummyjson.com/products/${id}`);

  const data = result || apiData;

  const handleAddToWishlist = () => {
    if (!data) return;

    const exists = wishlist.some((item) => item.id === data.id);

    if (exists) {
      alert("Product already in wishlist ❤️");
      return;
    }

    dispatch(addToWishlist(data));

    alert("Added to Wishlist ❤️");
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }

  if (!data) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/product")}
          className="mb-6 rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          ← Products
        </button>

        <div
          className={`rounded-2xl p-6 shadow-lg ${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          }`}
        >
          <img
            src={data.thumbnail}
            alt={data.title}
            className="mx-auto h-80 w-full object-contain"
          />

          <h1 className="mt-6 text-3xl font-bold">{data.title}</h1>

          <p className="mt-3 text-2xl font-bold text-green-500">
            ${data.price}
          </p>

          <p className="mt-5">{data.description}</p>

          <div className="mt-5 space-y-1">
            <p>Brand: {data.brand}</p>
            <p>Category: {data.category}</p>
            <p>Rating: {data.rating}</p>
            <p>Stock: {data.stock}</p>
          </div>

          <button
            onClick={handleAddToWishlist}
            className="mt-6 rounded-lg bg-pink-600 px-6 py-3 font-bold text-white"
          >
            ❤️ Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
