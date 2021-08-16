import React from "react";

import imgMob from "../../assets/png/section-2/mob.png";
import imgDesk from "../../assets/png/section-2/desk.png";
import "./Section2.css";

export default function Section2() {
  return (
    <section className="section-2">
      <div className="wrapper">
        <h1 className="section-2__heading">
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
            alt="section-2-img"
            className="section-2__img mob"
          />
          <img
            src={imgDesk}
            alt="section-2-img"
            className="section-2__img desk"
          />
          <div className="fade"></div>
        </div>
      </div>
    </section>
  );
}
