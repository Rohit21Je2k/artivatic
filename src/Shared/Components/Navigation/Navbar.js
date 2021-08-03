import React from "react";

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
        {/* Nav Menu Desktop*/}
        <div className="nav__desktop">
          <div className="nav__menu">
            <a href="/" className="nav__link selected">
              Home
            </a>
            <a href="/" className="nav__link">
              Products
            </a>
            <a href="/" className="nav__link">
              Solutions
            </a>
            <a href="/" className="nav__link">
              Resource
            </a>
            <a href="/" className="nav__link">
              Covid 19 tools
            </a>
            <a href="/" className="nav__link">
              Growth
            </a>
            <a href="/" className="nav__link">
              Company
            </a>
          </div>
          {/* Nav CTA */}
          <button className="nav__cta btn btn--bg btn--light">Get Demo</button>
        </div>
      </div>
      {/* Nav Auth */}
      <div className="nav__auth">
        <button className="nav__login btn btn--bg btn--light">
          User Login
        </button>
      </div>
    </nav>
  );
}
