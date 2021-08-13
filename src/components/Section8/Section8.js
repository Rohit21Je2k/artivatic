import React, { useState } from "react";

import ProductSlide from "../ProductSlide/ProductSlide.js";
import CoverImg from "../../assets/png/ausis-cover-img.png";
import Card from "../Card/Card.js";
import Carousel from "../Carousel/Carousel.js";

import "./Section8.css";

export default function Section8() {
  const [currentSlide, setCurrentSlide] = useState("ausis");
  function handleClick(e) {
    document
      .querySelector(".product-section .btn-nav.select")
      .classList.remove("select");
    e.target.classList.add("select");
    const slideName = e.currentTarget.getAttribute("data-name");
    console.log(slideName);
    setCurrentSlide(slideName);
  }
  return (
    <section className="section-8 product-section">
      <div className="wrapper">
        <h1 className="heading">Artivatic Products</h1>
        <button className="demo-btn btn btn--sm btn--dark">Get a demo</button>
        <div className="product-section__nav">
          <button
            className="btn-nav btn btn--sm select"
            data-name="ausis"
            onClick={handleClick}
          >
            AUSIS
          </button>
          <button
            className="btn-nav btn btn--sm"
            data-name="aspire"
            onClick={handleClick}
          >
            ASPIRE
          </button>
          <button
            className="btn-nav btn btn--sm"
            data-name="infrd"
            onClick={handleClick}
          >
            INFRD
          </button>
          <button
            className="btn-nav btn btn--sm"
            data-name="ausis"
            onClick={handleClick}
          >
            MIO
          </button>
          <button
            className="btn-nav btn btn--sm"
            data-name="ausis"
            onClick={handleClick}
          >
            PRODX
          </button>
        </div>
      </div>
      {currentSlide === "ausis" && (
        <ProductSlide
          imgSrc={CoverImg}
          tag="AUSIS for Life & Health Insurance"
          title=" AUSIS – Full-stack AI based Behavioural & Personalized Smart
              Underwriting"
          text=" Artivatic’s AI- Native SaaS Solutions for insurance & health
                  services as modular building blocks powered by best-in-class API
                gateway. New age product offerings, dynamic pricing, automation,
                  smart underwriting, smart claims processing, enhanced customer
                      experience, persistence & collections."
          relatedBtns={[
            "Medical Underwriting",
            "SMV Underwriting",
            "Financial Underwriting",
            "EME Underwriting",
          ]}
        >
          <Carousel
            id="ausis__carousel"
            className="product-slide__carousel"
            containerClassName="product-slide__carousel__container"
            prevControlClassName="product-slide__carousel__prev-control"
            nextControlClassName="product-slide__carousel__next-control"
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
        </ProductSlide>
      )}

      {currentSlide === "aspire" && (
        <ProductSlide
          imgSrc={CoverImg}
          tag="Aspire for Life & Health Insurance"
          title=" ASPIRE – Full-stack AI based Behavioural & Personalized Smart
              Underwriting"
          text=" Artivatic’s AI- Native SaaS Solutions for insurance & health
                  services as modular building blocks powered by best-in-class API
                gateway. New age product offerings, dynamic pricing, automation,
                  smart underwriting, smart claims processing, enhanced customer
                      experience, persistence & collections."
          relatedBtns={[
            "Medical Underwriting",
            "SMV Underwriting",
            "Financial Underwriting",
            "EME Underwriting",
          ]}
        >
          <Carousel
            id="aspire__carousel"
            className="product-slide__carousel"
            containerClassName="product-slide__carousel__container"
            prevControlClassName="product-slide__carousel__prev-control"
            nextControlClassName="product-slide__carousel__next-control"
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
        </ProductSlide>
      )}

      {currentSlide === "infrd" && (
        <ProductSlide
          imgSrc={CoverImg}
          tag="API Economy is future"
          title="INFRD – Modular API Platform"
          text="Lets take a step back and understand why we exist? Our insurance, 
          brokers, distribution partners find navigating the supply & demand side of 
          the industry chaotic. They need a single solution that masks all the complexities,
           centralise risks across product/tech/ops/compliance and help personalise business."
          relatedBtns={[
            "Medical Underwriting",
            "SMV Underwriting",
            "Financial Underwriting",
            "EME Underwriting",
          ]}
        >
          <Carousel
            id="infrd__carousel"
            className="product-slide__carousel"
            containerClassName="product-slide__carousel__container"
            prevControlClassName="product-slide__carousel__prev-control"
            nextControlClassName="product-slide__carousel__next-control"
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
        </ProductSlide>
      )}

      {currentSlide === "mio" && (
        <ProductSlide
          imgSrc={CoverImg}
          tag="AUSIS for Life & Health Insurance"
          title=" AUSIS – Full-stack AI based Behavioural & Personalized Smart
              Underwriting"
          text=" Artivatic’s AI- Native SaaS Solutions for insurance & health
                  services as modular building blocks powered by best-in-class API
                gateway. New age product offerings, dynamic pricing, automation,
                  smart underwriting, smart claims processing, enhanced customer
                      experience, persistence & collections."
          relatedBtns={[
            "Medical Underwriting",
            "SMV Underwriting",
            "Financial Underwriting",
            "EME Underwriting",
          ]}
        >
          <Carousel fade="primary-vl" navColor="#22b966" dotNav={false}>
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
        </ProductSlide>
      )}
    </section>
  );
}
