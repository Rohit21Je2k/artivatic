import React from "react";

import Ausis from "./slides/Ausis";
import "./ProductsSection.css";
export default function ProductsSection() {
  return (
    <section className="product-section">
      <div className="wrapper">
        <h1 className="heading">Artivatic Products</h1>
        <button className="demo-btn btn btn--sm btn--dark">Get a demo</button>
        <div className="product-section__nav">
          <button className="btn-nav btn btn--sm btn--toggle select">
            AUSIS
          </button>
          <button className="btn-nav btn btn--sm btn--toggle">ASPIRE</button>
          <button className="btn-nav btn btn--sm btn--toggle">INFRD</button>
          <button className="btn-nav btn btn--sm btn--toggle">MIO</button>
          <button className="btn-nav btn btn--sm btn--toggle">PRODX</button>
        </div>
      </div>
      <Ausis />
    </section>
  );
}
