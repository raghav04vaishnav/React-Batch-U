import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "./useTheme";

function Header({ cart, wishlist }) {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const isLoggedIn = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header
      className={`px-6 py-4 shadow-lg transition-colors duration-300 ${
        theme ? "bg-slate-850 text-white" : "bg-blue-200 text-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold">User App</h1>

        <nav className="flex items-center gap-6">
          <Link to="/product" className="font-semibold hover:text-blue-400">
            Products
          </Link>

          <Link to="/wishlist" className="font-semibold hover:text-pink-400">
            ❤️ Wishlist ({wishlist.length})
          </Link>

          <Link to="/cart" className="font-semibold hover:text-green-400">
            🛒 Cart ({cart.length})
          </Link>

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className={`rounded-lg px-4 py-2 font-semibold ${
              theme ? "bg-white text-black" : "bg-white text-black"
            }`}
          >
            {theme ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
