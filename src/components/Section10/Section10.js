import React from "react";

import greenCircle from "../../assets/vector/green-circle.svg";
import "./Section10.css";
export default function Section10() {
  return (
    <section className="section-10 feature-section">
      <div className="wrapper">
        <h1 className="heading">
          Build <span style={{ color: "var(--primary)" }}>Next Future </span>of
          Insurance & Health
        </h1>
        <hr className="hr-underline"></hr>
        <p className="para">
          Future is about need based, instant, personalised & risk focused.
          Artivatic makes that happen with powerful AI driven platform.
        </p>
        <div className="grid">
          <div className="cell">
            <img src={greenCircle} alt="cell-img" />
            <h3>AI, ML & Data Driven Products</h3>
            <p>
              Bleeding-edge technology innovations that leverage Natural
              Language Processing, Deep Learning and Predictive Algorithms to
              build a scalable and reliable financial, healthcare & Insurtech
              systems.
            </p>
          </div>

          <div className="cell">
            <img src={greenCircle} alt="cell-img" />
            <h3>Automated Decision Platform</h3>
            <p>
              Helps businesses use automated decision engines to reduce labour
              costs, enforce policies and improve the quality of the customer
              experience.
            </p>
          </div>

          <div className="cell">
            <img src={greenCircle} alt="cell-img" />
            <h3>Continuously & Self Evolving</h3>
            <p>
              Making inspiration from real life & science, our AI system evolves
              millions of scenarios and responses constantly selecting the best
              outcome in a given scenario.
            </p>
          </div>

          <div className="cell">
            <img src={greenCircle} alt="cell-img" />
            <h3>Code-free Integration</h3>
            <p>
              Making the entire process easier and faster to implement and
              execute without having to code your AI platform to save time and
              efforts.
            </p>
          </div>

          <div className="cell">
            <img src={greenCircle} alt="cell-img" />
            <h3>360 Data Intelligence</h3>
            <p>
              Capture and analyze complex
              individual-product-activities-operations-business-level data for
              agile optimization, no matter what the channel or device.
            </p>
          </div>

          <div className="cell">
            <img src={greenCircle} alt="cell-img" />
            <h3>Scalable Technology</h3>
            <p>
              Whether it is one person team to one of the biggest organization,
              our products and services are capable of providing optimal
              solutions to all your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
