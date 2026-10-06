import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Api from "./Api.jsx";
import Api1 from "./Api1.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/api" element={<Api />} />
        <Route path="/api1" element={<Api1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;