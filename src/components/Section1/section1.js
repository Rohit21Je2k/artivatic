import React from "react";

import img from "../../../assets/png/intro-section.png";
import "./IntroSection.css";

export default function IntoSection() {
  return (
    <section className="intro-section">
      <div className="wrapper">
        {/* heading */}
        <div className="grid-1">
          {/* <img className="bg" src={bg} alt="into-section-bg" /> */}
          <h1 className="intro-section__heading">
            Positively <br />
            <span style={{ color: "black" }}>Enabling </span>
            Affodrable Insurance
            <span style={{ color: "black" }}> Access</span>
          </h1>
        </div>
        {/* Image */}
        <div className="grid-2">
          <img src={img} alt="person-img" className="intro-section__img" />
        </div>
        {/* Content */}
        <div className="intro-section__content grid-3">
          <h2>Join us in revolutionizing the Insurance ecosystem</h2>
          <p>
            Artivatic’s AI- Native SaaS Solutions for insurance & health
            services as modular building blocks powered by best-in-class API
            gateway.
          </p>
          <a href="/" className="btn btn--dark">
            Get a demo
          </a>
          <a href="/" className="btn btn--toggle">
            Request Pricing
          </a>
        </div>
      </div>
    </section>
  );
}