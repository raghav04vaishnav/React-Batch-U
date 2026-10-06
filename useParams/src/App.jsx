import { BrowserRouter, Route, Routes } from "react-router-dom";
import Api from "./Api.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/api" element={<Api />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;