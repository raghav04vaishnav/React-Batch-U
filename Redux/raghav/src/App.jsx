import React from "react";
import Data1 from "./Data1.jsx";
import Data2 from "./Data2.jsx";
import Data3 from "./Data3.jsx";
import Data4 from "./Data4.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import ProductList from "./ProductList.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/data1" element={<Data1 />} />
          <Route path="/data2" element={<Data2 />} />
          <Route path="/data3" element={<Data3 />} />
          <Route path="/data4" element={<Data4 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productlist" element={<ProductList/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
