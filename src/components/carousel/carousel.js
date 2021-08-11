import React, { useState } from "react";

import "./Carousel.css";
export default function Carousel(props) {
  const {
    id,
    children,
    className,
    containerClassName,
    prevControlClassName,
    nextControlClassName,
    navClassName,
    fade,
    navColor,
    dotNav,
  } = props;
  const maxCount = children.length;
  const [count, setCount] = useState(0);

  let container, prevControl, nextControl, nav;

  function handleCarousel(e) {
    // get components
    if (!container) {
      container = document.querySelector(`#${id} .carousel__container`);
      prevControl = document.querySelector(`#${id} .carousel__control-prev`);
      nextControl = document.querySelector(`#${id} .carousel__control-next`);
      nav = document.querySelector(`#${id} .carousel__nav`);
    }

    const type = e.currentTarget.getAttribute("data-type");

    let targetIndex;
    if (type === "prev") {
      targetIndex = count - 1;
    }

    if (type === "next") {
      targetIndex = count + 1;
    }

    if (type === "index") {
      targetIndex = Number(e.target.getAttribute("data-index"));
    }

    if (targetIndex >= 0 && targetIndex <= maxCount - 1) {
      setCount(targetIndex);
    }

    // scroll
    const scrollWidth = container.scrollLeft;
    const offsetWidth = container.firstChild.offsetWidth;
    let scroll;
    if (type === "next") {
      scroll = scrollWidth + offsetWidth;
    }

    if (type === "prev") {
      scroll = scrollWidth - offsetWidth;
    }

    if (type === "index") {
      scroll = targetIndex * offsetWidth;
    }
    container.scroll(scroll, 0);

    // move nav btn
    if (dotNav) {
      const navChildren = nav.children;
      navChildren[count].classList.remove("select");
      navChildren[targetIndex].classList.add("select");
    }

    // hide and show control btn
    if (targetIndex === 0) {
      prevControl.classList.add("hidden");
      nextControl.classList.remove("hidden");
    }

    if (targetIndex === maxCount - 1) {
      prevControl.classList.remove("hidden");
      nextControl.classList.add("hidden");
    }

    if (targetIndex > 0 && targetIndex < maxCount - 1) {
      prevControl.classList.remove("hidden");
      nextControl.classList.remove("hidden");
    }
  }

  return (
    <div id={id} className={`carousel ${className || ""}`}>
      <div className={`carousel__container ${containerClassName || ""}`}>
        {children}
      </div>

      <div
        className={`carousel__control-prev hidden ${
          prevControlClassName || ""
        }`}
        style={{
          backgroundImage: `linear-gradient(to left, transparent, var(--${fade}) 50%)`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="carousel__control-prev-svg"
          onClick={handleCarousel}
          data-type="prev"
        >
          <path
            d="M16.2426 6.34292L14.8284 4.92871L7.75732 11.9998L14.8284 19.0708L16.2426 17.6566L10.5857 11.9998L16.2426 6.34292Z"
            fill={navColor}
          />
        </svg>
      </div>

      <div
        className={`carousel__control-next ${nextControlClassName || ""}`}
        style={{
          backgroundImage: `linear-gradient(to right, transparent, var(--${fade}) 50%)`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="carousel__control-next-svg"
          onClick={handleCarousel}
          data-type="next"
        >
          <path
            d="M7.75743 6.34292L9.17164 4.92871L16.2427 11.9998L9.17161 19.0708L7.75739 17.6566L13.4143 11.9998L7.75743 6.34292Z"
            fill={navColor}
          />
        </svg>
      </div>

      {dotNav && (
        <div
          className={`carousel__nav ${navClassName || ""}`}
          onClick={(e) => {
            if (!e.target.closest("button")) return;
            handleCarousel(e);
          }}
          data-type="index"
        >
          {[...Array(maxCount)].map((n, i) => {
            return (
              <button
                key={i}
                className={`carousel__nav-btn ${i === 0 ? "select" : ""}`}
                style={{ backgroundColor: navColor }}
                data-index={i}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
