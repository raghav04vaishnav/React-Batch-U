import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/data1">Data1</Link>
      <Link to="/data2">Data2</Link>
      <Link to="/data3">Data3</Link>
      <Link to="/data4">Data4</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/productlist">ProductList</Link>
    </nav>
  );
}

export default Header;
