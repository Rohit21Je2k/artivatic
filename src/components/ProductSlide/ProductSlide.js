import React from "react";

import "./ProductSlide.css";
export default function Ausis(props) {
  const { children, imgSrc, tag, title, text, relatedBtns } = props;
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
          {relatedBtns.map((btn) => {
            return <button className="btn">{btn}</button>;
          })}
        </div>

        {children ? (
          <div className="product-slide__related-resources">
            <h3 className="product-slide__related-resources__title">
              Resources related to the product
            </h3>
            {children}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
