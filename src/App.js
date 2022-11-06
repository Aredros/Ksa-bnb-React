import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import Fichelogement from "./pages/Fichelogement"

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/logement/:id" element={ <Fichelogement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
