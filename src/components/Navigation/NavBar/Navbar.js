import React from "react";

import NavDesk from "../NavDesk/NavDesk.js";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrapper">
        {/* Nav Logo */}
        <a href="/" className="nav__logo nav__logo--light">
          {null}
        </a>
        {/* Nav Hamburger */}
        <button className="nav__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="desk-nav-container">
          {/* Nav Menu Desktop*/}
          <NavDesk />
          <div className="nav__desktop">
            {/* Nav CTA */}
            <button className="nav__cta btn btn--bg btn--light">
              Get Demo
            </button>
          </div>
          {/* Nav Auth */}
          <div className="nav__auth">
            <button className="nav__login btn btn--bg btn--light">
              User Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
