import React, { useState, useEffect } from "react";

import NavSubGridCard from "../NavSubGridCard/NavSubGridCard";
import "./NavSubGrid.css";
export default function NavSubGrid(props) {
  let { navBannerRef, gridCardRef, subGrid } = props;
  const [containerStyles, setContainerStyles] = useState();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (navBannerRef && gridCardRef) {
      const height = document.querySelector(
        ".nav__sub-grid .container"
      ).offsetHeight;
      setHeight(height);
      const width = navBannerRef.offsetWidth;
      const left = gridCardRef.offsetLeft;
      setContainerStyles({
        width,
        left,
      });
    }
  }, [navBannerRef, gridCardRef]);

  return (
    <div
      className="nav__sub-grid"
      style={{ height: `${height}px`, overflow: "visible" }}
    >
      <div
        className="container"
        style={
          containerStyles && {
            width: `${containerStyles.width}px`,
            left: `-${containerStyles.left}px`,
          }
        }
      >
        <div className="content">
          {subGrid &&
            subGrid.map((item, index) => {
              return (
                <NavSubGridCard
                  key={index}
                  title={item.title}
                  list={item.list}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
