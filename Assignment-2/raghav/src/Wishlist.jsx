import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useTheme from "./useTheme";
import useView from "./useView";
import { removeFromWishlist } from "./slice/wishlistSlice";
import { addToCart as addCart } from "./slice/cartSlice";

function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const { theme, toggleTheme } = useTheme("wishlistTheme");
  const { view, viewToggle } = useView("wishlistView");
  const removeItem = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    const exists = cart.some((product) => product.id === item.id);
    if (exists) {
      alert("Product already in cart 🛒");
      return;
    }
    dispatch(addCart(item));
    alert("Added to cart 🛒");
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">❤️ Wishlist</h1>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-lg bg-slate-900 px-5 py-2 text-white"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button
              onClick={viewToggle}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              {view === "card" ? "📋 Show List" : "🃏 Show Cards"}
            </button>

            <button
              onClick={() => navigate("/product/cart")}
              className="rounded-lg bg-green-600 px-5 py-2 text-white"
            >
              🛒 Cart ({cart.length})
            </button>

            <button
              onClick={() => navigate("/product")}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              ← Products
            </button>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div
            className={`rounded-xl p-10 text-center shadow-lg ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold">Wishlist is Empty ❤️</h2>

            <button
              onClick={() => navigate("/product")}
              className="mt-5 rounded-lg bg-green-600 px-5 py-2 text-white"
            >
              Shop Now
            </button>
          </div>
        ) : view === "card" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-5 shadow-md ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                }`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="mx-auto h-40 w-full object-contain"
                />

                <h2 className="mt-4 text-lg font-bold">{item.title}</h2>

                <p className="mt-2 text-green-500">${item.price}</p>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 text-white"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-2 w-full rounded-lg bg-red-600 px-4 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`flex flex-wrap items-center gap-5 rounded-xl p-4 shadow-md ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                }`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold">{item.title}</h2>

                  <p className="text-green-500">${item.price}</p>
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="rounded-lg bg-green-600 px-4 py-2 text-white"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
