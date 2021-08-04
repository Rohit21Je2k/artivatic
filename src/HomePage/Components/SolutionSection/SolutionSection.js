import React from "react";

import cardImg from "../../../assets/png/carousel-card-img.png";

import "./SolutionSection.css";
export default function SolutionSection() {
  function scrollContainer(e) {
    const carouselContainer = document.querySelector(
      ".carousel .cards-container"
    );
    const carouselCard = document.querySelector(".carousel__card");
    const scrollWidth = carouselContainer.scrollLeft;
    const offsetWidth = carouselCard.offsetWidth;
    const scroll = scrollWidth + offsetWidth;
    console.log(scroll);
    carouselContainer.scroll(scroll, 0);
  }
  return (
    <section className="solution-section carousel">
      <div className="wrapper">
        <h1 className="heading">Industry solutions</h1>

        <hr className="hr-underline"></hr>

        <div className="carousel__content ">
          {/* cards-container */}
          <div className="cards-container">
            <div className="carousel__card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <h1>Customer Acquisition</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean at lacus neque at.
                </p>
              </div>
            </div>

            <div className="carousel__card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <h1>Customer Acquisition</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean at lacus neque at.
                </p>
              </div>
            </div>

            <div className="carousel__card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <h1>Customer Acquisition</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean at lacus neque at.
                </p>
              </div>
            </div>

            <div className="carousel__card">
              <img src={cardImg} alt="card-img" />
              <div className="text">
                <h1>Customer Acquisition</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean at lacus neque at.
                </p>
              </div>
            </div>
          </div>

          {/* scroll left */}
          <div className="fade left">
            <button
              className="carousel-control-prev"
              onClick={scrollContainer}
            ></button>
          </div>
          {/* scroll right */}
          <div className="fade right">
            <button
              className="carousel-control-next"
              onClick={scrollContainer}
            ></button>
          </div>
        </div>
        <div className="carousel__nav">
          <button className="nav-dot"></button>
          <button className="nav-dot active"></button>
          <button className="nav-dot"></button>
          <button className="nav-dot"></button>
          <button className="nav-dot"></button>
        </div>
      </div>
    </section>
  );
}
