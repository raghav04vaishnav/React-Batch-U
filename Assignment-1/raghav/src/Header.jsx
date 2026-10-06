import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 px-8 py-4 text-white shadow-lg">
      <div className="mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-bold">API Dashboard</h2>

        <nav className="flex gap-6">
          <Link to="/api" className="hover:text-blue-400">
            API
          </Link>
          <Link to="/api1" className="hover:text-blue-400">
            API-1
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
