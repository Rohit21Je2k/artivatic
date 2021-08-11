import React from "react";

import authImg from "../../assets/png/testimonial/person.png";
import greenGrid from "../../assets/vector/green-grid.svg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Carousel from "../../components/Carousel/Carousel.js";
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
            <Carousel
              id="testimonial__carousel"
              fade="transparent"
              navColor="#22b966"
              dotNav={true}
            >
              <TestimonialCard
                imgSrc={authImg}
                name="Aklesh Singh"
                designation=" Innovation Manager"
                address="ICICI Prudential Life Insurance"
                text="Artivatic’s product has shown promising results during the pilot
              phase. We were largely successful in decision making and risk
              profiling of new customers using their digital footprints and
              technology to read and access health records. Continuously
              working further with Artivatic to build new solutions to
              innovate insurance services."
              />
              <TestimonialCard
                imgSrc={authImg}
                name="Aklesh Singh"
                designation=" Innovation Manager"
                address="ICICI Prudential Life Insurance"
                text="Artivatic’s product has shown promising results during the pilot
              phase. We were largely successful in decision making and risk
              profiling of new customers using their digital footprints and
              technology to read and access health records. Continuously
              working further with Artivatic to build new solutions to
              innovate insurance services."
              />
              <TestimonialCard
                imgSrc={authImg}
                name="Aklesh Singh"
                designation=" Innovation Manager"
                address="ICICI Prudential Life Insurance"
                text="Artivatic’s product has shown promising results during the pilot
              phase. We were largely successful in decision making and risk
              profiling of new customers using their digital footprints and
              technology to read and access health records. Continuously
              working further with Artivatic to build new solutions to
              innovate insurance services."
              />
              <TestimonialCard
                imgSrc={authImg}
                name="Aklesh Singh"
                designation=" Innovation Manager"
                address="ICICI Prudential Life Insurance"
                text="Artivatic’s product has shown promising results during the pilot
              phase. We were largely successful in decision making and risk
              profiling of new customers using their digital footprints and
              technology to read and access health records. Continuously
              working further with Artivatic to build new solutions to
              innovate insurance services."
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
