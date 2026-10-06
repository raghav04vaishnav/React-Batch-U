import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/Data">Data</Link>
      <Link to="/Counter">Counter</Link>
      <Link to="/Counter1">Counter1</Link>
    </nav>
  );
}

export default Header;
