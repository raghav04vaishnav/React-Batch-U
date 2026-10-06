import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slice/loginSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const user = useSelector((state) => state.login.user);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 px-6 py-4 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold">
          🛍️ MyStore
        </Link>

        <nav className="flex flex-wrap items-center gap-3">
          <Link to="/" className="rounded-lg px-3 py-2 hover:bg-slate-700">
            Home
          </Link>

          {user && (
            <>
              <Link
                to="/product"
                className="rounded-lg px-3 py-2 hover:bg-slate-700"
              >
                Products
              </Link>

              <Link
                to="/product/wishlist"
                className="rounded-lg px-3 py-2 hover:bg-slate-700"
              >
                ❤️ {wishlist.length}
              </Link>

              <Link
                to="/product/cart"
                className="rounded-lg px-3 py-2 hover:bg-slate-700"
              >
                🛒 {cart.length}
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
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
