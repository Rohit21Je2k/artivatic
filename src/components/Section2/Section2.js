import React from "react";

import imgMob from "../../assets/png/about-section-png-mob.png";
import imgDesk from "../../assets/png/about-section-png-desk.png";
import "./Section2.css";

export default function Section2() {
  return (
    <section className="section-2 about-section">
      <div className="wrapper">
        <h1 className="about-section__heading">
          You are not just
          <br /> investing in
          <br />
          <span style={{ color: "var(--primary)" }}> technology</span>, you are
          investing in your customers
          <span style={{ color: "var(--primary)" }}> Happiness</span>
        </h1>
        <div className="img-container">
          <img
            src={imgMob}
            alt="about-section-img"
            className="about-section__img mob"
          />
          <img
            src={imgDesk}
            alt="about-section-img"
            className="about-section__img desk"
          />
          <div className="about-section__img__fade"></div>
        </div>
      </div>
    </section>
  );
}
