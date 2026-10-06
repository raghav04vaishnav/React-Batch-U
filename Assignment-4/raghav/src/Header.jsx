import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Product Store
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Cart
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
