import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Login from "./Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Home from "./Home.jsx";
import Wishlist from "./Wishlist.jsx";
import Cart from "./Cart.jsx";
import OrderHistory from "./OrderHistory.jsx";
import Header from "./Header.jsx";
import ForgotPassword from "./ForgotPassword.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Product */}
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />

        {/* Product Details */}
        <Route
          path="/productDetails/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />

        {/* Cart */}
        <Route
          path="/product/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Wishlist */}
        <Route
          path="/product/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        {/* Order History */}
        <Route
          path="/product/wishlist/history"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
