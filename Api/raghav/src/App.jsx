import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Products from "./Products.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Signup from "./Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
