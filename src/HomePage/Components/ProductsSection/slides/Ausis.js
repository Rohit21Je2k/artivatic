import React from "react";

import coverImg from "../../../../assets/png/ausis-cover-img.png";
import Card from "../../../../components/card/card";
import Carousel123 from "../../../../components/carousel/carousel";
import "./Ausis.css";
export default function Ausis() {
  return (
    <div className="product-slide">
      <div className="wrapper">
        <div className="container">
          <img
            src={coverImg}
            alt="cover-img"
            className="product-slide__cover-img"
          ></img>
          <div className="product-slide__text">
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
        <button className="product-slide__more-btn btn btn--dark">
          Get to know more
        </button>
        <div className="product-slide__related-btns">
          <button className="btn">Medical Underwriting</button>
          <button className="btn">SMV Underwriting</button>
          <button className="btn">Financial Underwriting</button>
          <button className="btn">EME Underwriting</button>
        </div>
        <div className="product-slide__related-resources">
          <h3 className="product-slide__related-resources__title">
            Resources related to the product
          </h3>
          <Carousel123 fade="primary-vl" navColor="#22b966" dotNav={false}>
            <Card
              tag="Case study"
              title="Role of Telehealth During COVID-19"
              ancLink="/"
              btnText="View all case studies"
            />
            <Card
              tag="Case study"
              title="Role of Telehealth During COVID-19"
              ancLink="/"
              btnText="View all case studies"
            />
            <Card
              tag="Case study"
              title="Role of Telehealth During COVID-19"
              ancLink="/"
              btnText="View all case studies"
            />
            <Card
              tag="Case study"
              title="Role of Telehealth During COVID-19"
              ancLink="/"
              btnText="View all case studies"
            />
            <Card
              tag="Case study"
              title="Role of Telehealth During COVID-19"
              ancLink="/"
              btnText="View all case studies"
            />
          </Carousel123>
        </div>
      </div>
    </div>
  );
}
