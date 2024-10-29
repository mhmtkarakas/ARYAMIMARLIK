import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect } from "react";

import Home from "../src/pages/Home/Home.jsx";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
    });
  }, []); // Empty dependency array to ensure it runs once on component mount

  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
