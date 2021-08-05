import React from "react";

import authImg from "../../../assets/png/testimonial/person.png";
import greenGrid from "../../../assets/vector/green-grid.svg";
import "./Testimonial.css";
export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="wrapper">
        <h1 className="heading">
          <span style={{ color: "var(--primary)" }}>Artivatic </span>believes in
          <span style={{ color: "var(--primary)" }}> growing </span>together
          with all our stakeholders.
        </h1>
        <h3>“See what our customers say”</h3>
        <hr className="hr-underline" />
        <div className="container">
          <img src={greenGrid} alt="green-grid" className="green-grid" />
          <div className="content">
            <div className="test-card">
              <img src={authImg} alt="auth-img" />
              <div className="auth-details">
                <h5>Aklesh Singh</h5>
                <p>
                  Innovation Manager,
                  <br /> ICICI Prudential Life Insurance
                </p>
              </div>
              <p className="auth-text">
                Artivatic’s product has shown promising results during the pilot
                phase. We were largely successful in decision making and risk
                profiling of new customers using their digital footprints and
                technology to read and access health records. Continuously
                working further with Artivatic to build new solutions to
                innovate insurance services.
              </p>
            </div>
          </div>
          <div className="container-nav">
            <button className="prev"></button>
            <div className="dots">
              <button className="dot-nav"></button>
              <button className="dot-nav select"></button>
              <button className="dot-nav"></button>
              <button className="dot-nav"></button>
              <button className="dot-nav"></button>
            </div>
            <button className="next"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
