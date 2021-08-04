import React from "react";

import Card from "../card/card.js";
import "./carousel.css";
export default function Carousel123() {
  function handleCarouselScroll(e) {
    const container = e.currentTarget.parentNode.firstChild;
    const scrollWidth = container.scrollLeft;
    const offsetWidth = container.firstChild.offsetWidth;
    const scroll = scrollWidth + offsetWidth;
    container.scroll(scroll, 0);
  }
  return (
    <div className="test">
      <div className="carousel1">
        <div className="carousel__container">
          <Card
            tag="Case study"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
            ancLink="/"
            btnText="View all case studies"
          />
          <Card
            tag="Case study"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
            ancLink="/"
            btnText="View all case studies"
          />
          <Card
            tag="Case study"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
            ancLink="/"
            btnText="View all case studies"
          />
          <Card
            tag="Case study"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
            ancLink="/"
            btnText="View all case studies"
          />
          <Card
            tag="Case study"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
            ancLink="/"
            btnText="View all case studies"
          />
          <Card
            tag="Case study"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
            ancLink="/"
            btnText="View all case studies"
          />
        </div>

        <div className="carousel__control-prev" onClick={handleCarouselScroll}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2426 6.34292L14.8284 4.92871L7.75732 11.9998L14.8284 19.0708L16.2426 17.6566L10.5857 11.9998L16.2426 6.34292Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="carousel__control-next" onClick={handleCarouselScroll}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75743 6.34292L9.17164 4.92871L16.2427 11.9998L9.17161 19.0708L7.75739 17.6566L13.4143 11.9998L7.75743 6.34292Z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="carousel__nav">
          <button className="carousel__nav-btn"></button>
          <button className="carousel__nav-btn select"></button>
          <button className="carousel__nav-btn"></button>
          <button className="carousel__nav-btn"></button>
          <button className="carousel__nav-btn"></button>
        </div>
      </div>
    </div>
  );
}
