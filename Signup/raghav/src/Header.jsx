import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-center items-center shadow-md">

      <div className="flex text-center gap-6">
        <Link
          to="/Signup"
          className="hover:text-yellow-300"
        >
          Signup
        </Link>

        <Link
          to="/Login"
          className="hover:text-yellow-300 transition duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;