import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Api from "./Api.jsx";
import Login from "./Login.jsx";
import Users from "./Users.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Api />
            </ProtectedRoute>
          }
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
