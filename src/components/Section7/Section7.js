import React from "react";

import blackDot from "../../assets/vector/blackDot.svg";
import "./Section7.css";
export default function Section7() {
  return (
    <section className="section-7 new-product-section">
      <div className="wrapper">
        <div className="dot-grid-1"></div>
        <div className="dot-grid-2"></div>

        <div className="heading">
          <h1>
            New Products
            <br /> in
            <br />
            <span style={{ color: "var(--primary)" }}> Artivatic</span>
          </h1>
        </div>

        <div className="grid-card mob">
          <img src={blackDot} alt="grid-card-img" />
          <h2>ASPIRE</h2>
          <p>
            Our insurance, brokers, distribution partners find navigating the
            supply & demand side of the industry chaotic.
          </p>
          <button>Know more</button>
        </div>

        <div className="grid-card mob">
          <img src={blackDot} alt="grid-card-img" />
          <h2>MIO</h2>
          <p>
            Our insurance, brokers, distribution partners find navigating the
            supply & demand side of the industry chaotic.
          </p>
          <button>Know more</button>
        </div>

        <div className="grid-card">
          <img src={blackDot} alt="grid-card-img" />
          <h2>New Product</h2>
          <p>
            Our insurance, brokers, distribution partners find navigating the
            supply & demand side of the industry chaotic.
          </p>
          <button>Know more</button>
        </div>

        <div className="grid-card">
          <img src={blackDot} alt="grid-card-img" />
          <h2>New Product</h2>
          <p>
            Our insurance, brokers, distribution partners find navigating the
            supply & demand side of the industry chaotic.
          </p>
          <button>Know more</button>
        </div>

        <div className="grid-card">
          <img src={blackDot} alt="grid-card-img" />
          <h2>New Product</h2>
          <p>
            Our insurance, brokers, distribution partners find navigating the
            supply & demand side of the industry chaotic.
          </p>
          <button>Know more</button>
        </div>
      </div>
    </section>
  );
}
