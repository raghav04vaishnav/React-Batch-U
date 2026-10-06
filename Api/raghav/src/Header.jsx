import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-center gap-8 bg-gray-900 py-5">
      <Link
        to="/Products"
        className="font-semibold text-white hover:text-gray-400"
      >
        Products
      </Link>
      <Link
        to="Signup"
        className="font-semibold text-white hover:text-gray-400"
      >
        Signup
      </Link>
    </nav>
  );
}

export default Header;
