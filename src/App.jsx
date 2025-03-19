import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Contact from "./pages/Contact";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* ✅ Navbar included for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;