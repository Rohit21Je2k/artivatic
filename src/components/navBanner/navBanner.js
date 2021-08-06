import React from "react";

import greenDot from "../../assets/vector/green-circle.svg";
import "./navBanner.css";
export default function NavBanner(props) {
  const { title, grid } = props;
  return (
    <div className="navBanner">
      <h3 className="navBanner__title">{title}</h3>
      <div className="navBanner__grid">
        {grid &&
          grid.map((card, index) => {
            return (
              <div key={index} className="navBanner__grid__card">
                <img src={greenDot} alt="card-img" />
                <div>
                  <h4>{card.name}</h4>
                  <p>{card.info}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
