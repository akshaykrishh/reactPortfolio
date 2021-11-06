import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbarWrapper">
      <div className="nav">
        <div className="logo">
          <Link to="/">Akshay</Link>
        </div>
        <div className="navLinks">
          <ul>
            <l1>
              <Link to="/">Home</Link>
            </l1>
            <l1>
              <Link to="/about">About</Link>
            </l1>
            <l1>
              <Link to="/work">Work</Link>
            </l1>
            <l1>
              <Link to="/contact">Contact</Link>
            </l1>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
