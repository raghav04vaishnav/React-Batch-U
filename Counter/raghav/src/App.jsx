import { Suspense, useState } from "react";
import "./App.css";
import Counter from "./Counter.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Counter1 from "./Counter1.jsx";
import Data from "./DataBase.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/data" element={<Suspense fallback={<h2>Loading...</h2>}>
            <Data/>
          </Suspense>}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter1" element={<Counter1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
