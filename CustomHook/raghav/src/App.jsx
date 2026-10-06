import { useState } from "react";
import "./App.css";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import useTheme from "./useTheme.jsx";
import Home from "./Home.jsx";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "dark mode" : "light mode"}
      </button>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
