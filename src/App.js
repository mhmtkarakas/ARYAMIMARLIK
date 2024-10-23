import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
