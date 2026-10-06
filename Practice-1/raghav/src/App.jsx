import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product.jsx";
import Header from "./Header.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import Wishlist from "./Wishlist.jsx";
import useTheme from "./useTheme.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const {theme, toggleTheme} = useTheme()

  return (
    <>
    <button onClick={toggleTheme}>{theme ? "light mode" : "dark mode"}</button>
      <BrowserRouter>
        <Header cart={cart} wishlist={wishlist} />
        <Routes>
          <Route
            path="/product"
            element={<Product cart={cart} setCart={setCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/productDetails/:id"
            element={
              <ProtectedRoute>
                <ProductDetails wishlist={wishlist} setWishlist={setWishlist} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
