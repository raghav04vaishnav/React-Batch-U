import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Header;
