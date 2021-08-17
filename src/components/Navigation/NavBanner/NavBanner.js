import React, { useState } from "react";

import NavGridCard from "../NavGridCard/NavGridCard";

import "./NavBanner.css";
export default function NavBanner(props) {
  const { row1, row2 } = props;

  const [row1CurrentCard, setRow1CurrentCard] = useState(0);
  const [row2CurrentCard, setRow2CurrentCard] = useState(0);

  const [navBannerRef, setNavBannerRef] = useState();

  const handleNavBannerRef = (node) => {
    if (node) {
      setNavBannerRef(node);
    }
  };

  return (
    <div className="navBanner" ref={handleNavBannerRef}>
      {row1 && (
        <div className="navBanner__row-1">
          <h3 className="navBanner__title">{row1.title}</h3>
          <div
            className="navBanner__grid"
            onMouseLeave={() => setRow1CurrentCard(0)}
          >
            {row1.grid?.map((card, index) => {
              return (
                <NavGridCard
                  key={index}
                  cardNumber={index + 1}
                  currentCard={row1CurrentCard}
                  setCurrentCard={setRow1CurrentCard}
                  navBannerRef={navBannerRef}
                  name={card.name}
                  info={card.info}
                  subGrid={card.subGrid}
                />
              );
            })}
          </div>
        </div>
      )}

      {row2 && (
        <div className="navBanner__row-2">
          <h3 className="navBanner__title">{row2.title}</h3>
          <div
            className="navBanner__grid"
            onMouseLeave={() => setRow2CurrentCard(0)}
          >
            {row2.grid?.map((card, index) => {
              return (
                <NavGridCard
                  key={index}
                  cardNumber={index + 1}
                  currentCard={row2CurrentCard}
                  setCurrentCard={setRow2CurrentCard}
                  navBannerRef={navBannerRef}
                  name={card.name}
                  info={card.info}
                  subGrid={card.subGrid}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
