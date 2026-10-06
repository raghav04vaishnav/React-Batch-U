import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-900 px-6 py-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/home" className="text-2xl font-bold text-white">
          My Dashboard
        </Link>

        <div className="flex items-center gap-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;