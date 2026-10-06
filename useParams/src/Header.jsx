import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300"
        >
          MyApp
        </Link>

        {/* Navigation */}
        <div className="flex gap-8">
          <Link
            to="/api"
            className="text-gray-300 transition duration-300"
          >
            API
          </Link>

          <Link
            to="/productDetails"
            className="text-gray-300 transition duration-300"
          >
            Product Details
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;