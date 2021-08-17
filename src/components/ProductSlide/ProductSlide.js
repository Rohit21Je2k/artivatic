import React from "react";

import Carousel from "../Carousel/Carousel";
import "./ProductSlide.css";
export default function Ausis(props) {
  const { id, children, imgSrc, tag, title, text, relatedBtns } = props;
  return (
    <div className="product-slide">
      <div className="wrapper">
        <div className="product-slide__details">
          <img
            src={imgSrc}
            alt="cover-img"
            className="product-slide__cover-img"
          ></img>
          <div className="product-slide__text">
            <h5>{tag}</h5>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
        <button className="product-slide__more-btn btn btn--dark">
          Get to know more
        </button>
        <div className="product-slide__related-btns">
          {relatedBtns.map((btn, index) => {
            return (
              <button key={index} className="btn">
                {btn}
              </button>
            );
          })}
        </div>

        {children ? (
          <div className="product-slide__related-resources">
            <h3 className="product-slide__related-resources__title">
              Resources related to the product
            </h3>
            <Carousel
              id={id}
              className="product-slide__carousel"
              containerClassName="product-slide__carousel__container"
              prevControlClassName="product-slide__carousel__prev-control"
              nextControlClassName="product-slide__carousel__next-control"
              fade="primary-vl"
              navColor="#22b966"
              dotNav={false}
            >
              {children}
            </Carousel>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
