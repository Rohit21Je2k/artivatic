import React from "react";

import cardImg from "../../assets/png/cardIMG.png";
import "./Card.css";
export default function Card(props) {
  const { type, tag, title, text, btnText } = props;
  return (
    <div className={`card ${type}`}>
      <img src={cardImg} alt="card-img" className="card__img" />
      <div className="card__info">
        {tag && <span className="card__tag">{tag}</span>}
        <h5 className="card__title">{title}</h5>
        <p className="card__text">{text}</p>
        {type === "hover" && (
          <div className="card__hover">
            <h5 className="card__hover__title">{title}</h5>
            <p className="card__hover__text">{text}</p>
          </div>
        )}
        {btnText && <button className="card__btn">{btnText}</button>}
      </div>
    </div>
  );
}
