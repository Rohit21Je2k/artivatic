import React from "react";

import cardImg from "../../assets/png/cardIMG.png";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import "./Section12.css";
export default function Section12() {
  return (
    <section className="section-12 resource-section">
      <div className="wrapper">
        <h1 className="heading">Resources that help you grow</h1>
        <hr className="hr-underline" />
        <div className="main-card">
          <div className="img-container">
            <img src={cardImg} alt="card-img" className="main-card-img" />
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

        <Carousel
          id="resource-section__carousel"
          containerClassName="resource-section__carousel__container"
          prevControlClassName="resource-section__carousel__prev-control"
          nextControlClassName="resource-section__carousel__next-control"
          fade="primary-vl"
          navColor="#22b966"
          dotNav={false}
        >
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
        </Carousel>

        <button className="resource-section__view-more-btn btn btn--bg btn--dark">
          View all Resources
        </button>
      </div>
    </section>
  );
}
