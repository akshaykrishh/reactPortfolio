import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from "../assets/images/ak_logo.svg";

function Navbar(props) {
  const isLinksOn = props.links;

  if (isLinksOn === "1") {
    return (
      <nav className="navbarWrapper">
        <div className="nav">
          <div className="logo">
            <Link to="/">
              {/* <img src={logo} alt="" /> */}
              <svg
                width="100%"
                height="100%"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 277 277"
                aria-labelledby="logoTitle"
                role="img"
              >
                <title id="logoTitle">Akshay Krishna</title>
                <defs>
                  <style>{`.cls-1{fill:none;stroke:#ff4532;stroke-miterlimit:10;stroke-width:12px;}`}</style>
                </defs>
                <title>ak_logo</title>
                <line class="cls-1" x1="103" y1="272" x2="215" y2="30" />
                <line class="cls-1" x1="216" y1="243" x2="216" y2="27" />
                <line class="cls-1" x1="214" y1="238" x2="142" y2="185" />
                <line class="cls-1" x1="217" y1="141" x2="142" y2="185" />
                <circle class="cls-1" cx="138.5" cy="138.5" r="133.5" />
              </svg>
            </Link>
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
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbarWrapper">
        <div className="nav">
          <div className="logo">
            <Link to="/">
              {/* <img src={logo} alt="" /> */}
              <svg
                width="100%"
                height="100%"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 277 277"
              >
                <defs>
                  <style>{`.cls-1{fill:none;stroke:#ff4532;stroke-miterlimit:10;stroke-width:12px;}`}</style>
                </defs>
                <title>ak_logo</title>
                <line class="cls-1" x1="103" y1="272" x2="215" y2="30" />
                <line class="cls-1" x1="216" y1="243" x2="216" y2="27" />
                <line class="cls-1" x1="214" y1="238" x2="142" y2="185" />
                <line class="cls-1" x1="217" y1="141" x2="142" y2="185" />
                <circle class="cls-1" cx="138.5" cy="138.5" r="133.5" />
              </svg>
            </Link>
          </div>
          {/* <div className="navLinks">
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
            </ul>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
