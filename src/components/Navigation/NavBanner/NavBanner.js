import React, { useState, useCallback } from "react";

import NavGridCard from "../NavGridCard/NavGridCard";

import "./NavBanner.css";
export default function NavBanner(props) {
  const { title, grid } = props;

  const [currentCard, setCurrentCard] = useState(0);

  const [navBannerRef, setNavBannerRef] = useState();

  const handleNavBannerRef = useCallback((node) => {
    if (node) {
      setNavBannerRef(node);
    }
  }, []);

  return (
    <div className="navBanner" ref={handleNavBannerRef}>
      <h3 className="navBanner__title">{title}</h3>
      <div className="navBanner__grid">
        {grid &&
          grid.map((card, index) => {
            return (
              <NavGridCard
                cardNumber={index + 1}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                key={index}
                navBannerRef={navBannerRef}
                name={card.name}
                info={card.info}
              />
            );
          })}
      </div>
    </div>
  );
}
