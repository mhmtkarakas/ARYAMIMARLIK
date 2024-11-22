import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";

import AOS from "aos";
import "aos/dist/aos.css"; 


import Home from "../src/pages/Home/Home.jsx";
import Footer from './components/Footer/Footer';
import BusinessPartners from "./pages/BusinessPartners/BusinessPartners";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import ContactPage from "./pages/ContactPage/ContactPage";
import CorporatePage from "./pages/CorporatePage/CorporatePage";
import References from "./pages/References/References";


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
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/kurumsal" element={<CorporatePage />} />
          <Route path="/referanslar" element={<References />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <WhatsappButton />
    </div>
  );
}

export default App;
