import React from "react";
import "./TestimonialCard.css";
export default function TestimonialCard(props) {
  const { imgSrc, name, designation, address, text } = props;
  return (
    <div className="testimonial-card">
      <img src={imgSrc} alt="auth-img" className="testimonial-card__img" />
      <div className="testimonial-card__auth">
        <h5>{name}</h5>
        <p>
          {designation},
          <br /> {address}
        </p>
      </div>
      <p className="testimonial-card__text">{text}</p>
    </div>
  );
}
