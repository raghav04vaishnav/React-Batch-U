import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700 bg-gray-950/95 px-5 py-4 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 md:gap-7">
        <h2 className="mr-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
          Profile
        </h2>

        <Link
          to="/"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600 hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/introduction"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Introduction
        </Link>

        <Link
          to="/qualification"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Qualification
        </Link>

        <Link
          to="/skill"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Skills
        </Link>

        <Link
          to="/projects"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Projects
        </Link>

        <Link
          to="/contact"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Contact
        </Link>

        <Link
          to="/address"
          className="rounded-lg px-3 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Address
        </Link>

        <div className="ml-2">
          <img
            src="./images.jpeg"
            alt="Profile"
            className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover shadow-lg transition duration-300 hover:scale-110"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
