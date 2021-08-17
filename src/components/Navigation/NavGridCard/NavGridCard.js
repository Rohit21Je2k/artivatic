import React, { useState, useEffect } from "react";

import NavSubGrid from "../NavSubGrid/NavSubGrid";
import greenDot from "../../../assets/vector/green-circle.svg";
import "./NavGridCard.css";

export default function NavGridCard(props) {
  const {
    name,
    info,
    navBannerRef,
    cardNumber,
    currentCard,
    setCurrentCard,
    subGrid,
  } = props;
  const [showSubGrid, setShowSubgrid] = useState(false);
  const [gridCardRef, setGridCardRef] = useState();

  const handleGridCardRef = (node) => {
    if (node) {
      setGridCardRef(node);
    }
  };

  const showSubGridHandler = (e) => {
    // e.currentTarget.classList.add("bg-vl-blue");
    setCurrentCard(Number(cardNumber));
  };

  // const hideSubGridHandler = () => {
  //   setShowSubgrid(false);
  // };

  useEffect(() => {
    if (!subGrid) return;

    if (cardNumber === currentCard) {
      setShowSubgrid(true);
      gridCardRef.classList.add("bg-vl-blue");
      return;
    }

    gridCardRef?.classList.remove("bg-vl-blue");
    setShowSubgrid(false);
  }, [currentCard, cardNumber, subGrid, gridCardRef]);

  return (
    <div className="navBanner__grid__card" ref={handleGridCardRef}>
      <div className="container" onMouseEnter={showSubGridHandler}>
        <img src={greenDot} alt="card-img" />
        <div>
          <h4 className="navBanner__grid__card__h4">{name}</h4>
          <p className="navBanner__grid__card__p">{info}</p>
        </div>
      </div>
      {showSubGrid && subGrid && (
        <NavSubGrid
          subGrid={subGrid}
          navBannerRef={navBannerRef}
          gridCardRef={gridCardRef}
        />
      )}
    </div>
  );
}
