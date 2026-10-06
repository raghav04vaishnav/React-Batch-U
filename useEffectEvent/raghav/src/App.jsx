import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
