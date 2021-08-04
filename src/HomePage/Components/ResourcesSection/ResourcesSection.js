import React from "react";

import cardImg from "../../../assets/png/cardIMG.png";
import "./ResourcesSection.css";
export default function ResourcesSection() {
  return (
    <section className="resource-section">
      <div className="wrapper">
        <h1 className="heading">Resources that help you grow</h1>
        <hr className="hr-underline" />
        <div className="card">
          <div className="img-container">
            <img src={cardImg} alt="card-img" className="card-img" />
          </div>
          <div className="text">
            <p className="tag">UPCOMING EVENT</p>
            <h3>New product launch for Artivatic API Cloud</h3>
            <p className="details">
              Artivatic’s product has shown promising results during the pilot
              phase. We were largely successful in decision making and risk
              profiling of new customers using their digital.
            </p>
            <p className="date">21st July,2021</p>
          </div>
        </div>

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

        <button className="btn btn--bg btn--dark">View all Resources</button>
      </div>
    </section>
  );
}
