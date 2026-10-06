import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const result = localStorage.getItem("user");

  if (!result) {
    return <Navigate to="/Signup" />;
  }

  return children;
}

export default ProtectedRoute;