import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const res = localStorage.getItem("user");

  if (!res) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;