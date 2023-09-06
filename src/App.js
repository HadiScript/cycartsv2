import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Tail from "./checkk/Tail";
import About from "./screens/about";
import ServicesSystems from "./screens/ServicesSystems";
import Showcase from "./screens/Showcase";
import Career from "./screens/Career";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/systems-and-services" element={<ServicesSystems />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/check" element={<Tail />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
