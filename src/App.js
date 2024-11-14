import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";

import AOS from "aos";
import "aos/dist/aos.css"; 


import Home from "../src/pages/Home/Home.jsx";
import Footer from './components/Footer/Footer';
import BusinessPartners from "./pages/BusinessPartners/BusinessPartners";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, 
    });
  }, []); 

  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/isortaklarimiz" element={<BusinessPartners />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
