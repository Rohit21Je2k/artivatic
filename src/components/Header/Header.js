import React from "react";

import ContactStrip from "../ContactStrip/ContactStrip.js";
import Navbar from "../NavBar/Navbar.js";

export default function Header() {
  return (
    <header>
      <ContactStrip />
      <Navbar />
    </header>
  );
}
