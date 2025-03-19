import React from "react";
import { Link } from "react-router-dom";
import "../style.css"; // Import global styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo" >VOYAGE 360</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/places">Destinations</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
