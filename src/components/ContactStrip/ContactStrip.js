import React from "react";

import "./ContactStrip.css";
export default function ContactStrip() {
  return (
    <div className="contact-strip">
      <div className="wrapper">
        <div className="contact-strip__search-bar">
          <input name="search" type="text" placeholder="Search" />
        </div>
        <div className="contact-strip__details">
          <span className="number">+919000000000</span>
          <span className="email">emailaddres@gmail.com</span>
          <button className="contact">Contact us</button>
          <button className="support">Support</button>
          <select className="language" name="lang">
            <option value="EN">EN</option>
            <option value="JP">JP</option>
            <option value="RS">RS</option>
            <option value="QP">QP</option>
          </select>
        </div>
      </div>
    </div>
  );
}
