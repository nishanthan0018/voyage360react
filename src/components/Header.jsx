import React from "react";
import { Link } from "react-router-dom";
import "../style.css"; // ✅ Correct if `style.css` is in `src/`

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">VOYAGE 360</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/places">Places</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
