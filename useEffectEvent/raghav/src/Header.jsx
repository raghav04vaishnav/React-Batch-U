import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/product">Product</Link>
    </nav>
  );
}

export default Header;
