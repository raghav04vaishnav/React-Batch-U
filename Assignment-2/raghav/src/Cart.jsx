import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useTheme from "./useTheme";
import useView from "./useView";

import { removeFromCart, clearCart } from "./slice/cartSlice";

import { clearWishlist } from "./slice/wishlistSlice";

import { addOrder } from "./slice/orderHistorySlice";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { theme, toggleTheme } = useTheme("cartTheme");

  const { view, viewToggle } = useView("cartView");

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0,
  );

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty 🛒");
      return;
    }

    const newOrder = {
      id: Date.now(),
      products: [...cart],
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    dispatch(addOrder(newOrder));

    dispatch(clearCart());
    dispatch(clearWishlist());

    alert("Order Placed Successfully 🎉");

    navigate("/product/wishlist/history");
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">🛒 My Cart</h1>

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
              onClick={() => navigate("/product/wishlist/history")}
              className="rounded-lg bg-purple-600 px-5 py-2 text-white"
            >
              📦 Order History
            </button>

            <button
              onClick={() => navigate("/product")}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              ← Products
            </button>
          </div>
        </div>

        {cart.length === 0 ? (
          <div
            className={`rounded-xl p-10 text-center shadow-lg ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold">Cart is Empty 🛒</h2>

            <button
              onClick={() => navigate("/product")}
              className="mt-5 rounded-lg bg-green-600 px-5 py-2 text-white"
            >
              Shop Now
            </button>
          </div>
        ) : view === "card" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cart.map((item) => (
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
                  onClick={() => removeItem(item.id)}
                  className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
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
                  onClick={() => removeItem(item.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div
            className={`mt-8 rounded-xl p-6 shadow-md ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Price</p>

                <h2 className="text-3xl font-bold text-green-500">
                  ${totalPrice.toFixed(2)}
                </h2>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="rounded-lg bg-red-600 px-5 py-2 text-white"
                >
                  Clear Cart
                </button>

                <button
                  onClick={placeOrder}
                  className="rounded-lg bg-green-600 px-6 py-2 font-bold text-white"
                >
                  🛍️ Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
