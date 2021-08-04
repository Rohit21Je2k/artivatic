import React from "react";

import coverImg from "../../../../assets/png/ausis-cover-img.png";
import cardImg from "../../../../assets/png/carousel-card-img.png";
import "./Ausis.css";
export default function Ausis() {
  return (
    <div className="ausis product-slide">
      <div className="wrapper">
        <div className="container">
          <img src={coverImg} alt="cover-img" className="cover-img"></img>
          <div className="text">
            <h5>AUSIS for Life & Health Insurance</h5>
            <h3>
              AUSIS – Full-stack AI based Behavioural & Personalized Smart
              Underwriting
            </h3>
            <p>
              Artivatic’s AI- Native SaaS Solutions for insurance & health
              services as modular building blocks powered by best-in-class API
              gateway. New age product offerings, dynamic pricing, automation,
              smart underwriting, smart claims processing, enhanced customer
              experience, persistence & collections.
            </p>
          </div>
        </div>
        <button className="know-more-btn btn btn--dark">
          Get to know more
        </button>
        <div className="related-btns">
          <button className="btn">Medical Underwriting</button>
          <button className="btn">SMV Underwriting</button>
          <button className="btn">Financial Underwriting</button>
          <button className="btn">EME Underwriting</button>
        </div>
        <div className="related-resources">
          <h3>Resources related to the product</h3>
          <div className="carousel">
            <div className="card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <span>Case Study</span>
                <h5>Role of Telehealth During COVID-19</h5>
                <button>View all case studies</button>
              </div>
            </div>

            <div className="card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <span>Blog</span>
                <h5>Role of Telehealth During COVID-19</h5>
                <button>View all case studies</button>
              </div>
            </div>

            <div className="card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <span>Resources</span>
                <h5>Role of Telehealth During COVID-19</h5>
                <button>View all case studies</button>
              </div>
            </div>

            <div className="card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <span>Product video</span>
                <h5>Role of Telehealth During COVID-19</h5>
                <button>View all case studies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
