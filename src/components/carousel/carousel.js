import React, { useState } from "react";

import "./carousel.css";
export default function Carousel(props) {
  const { children, className, fade, navColor, dotNav } = props;
  const maxCount = children.length;
  const [count, setCount] = useState(0);

  let container, nav;

  function handleCarouselScroll(e) {
    // get container and nav
    if (!container && !nav) {
      const children = e.currentTarget.parentNode.children;
      for (const node in children) {
        const element = children[node];
        if (element.classList?.contains("carousel__container")) {
          container = element;
        }

        if (element.classList?.contains("carousel__nav")) {
          nav = element;
        }
      }
    }
    const type = e.currentTarget.getAttribute("data-type");

    // increase/ decrease count
    setCount((prevCount) => {
      if (type === "next") {
        if (prevCount < maxCount - 1) {
          prevCount += 1;
        }
      }

      if (type === "prev") {
        if (prevCount > 0) {
          prevCount -= 1;
        }
      }
      return prevCount;
    });

    // move nav btn
    if (dotNav) {
      const navChildren = nav.children;
      if (type === "next") {
        if (count < maxCount - 1) {
          navChildren[count + 1]?.classList.add("select");
          navChildren[count]?.classList.remove("select");
        }
      }

      if (type === "prev") {
        if (count > 0) {
          navChildren[count - 1]?.classList.add("select");
          navChildren[count]?.classList.remove("select");
        }
      }
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
    container.scroll(scroll, 0);
  }

  return (
    <div className={`carousel ${className || ""}`}>
      <div className="carousel__container">{children}</div>
      {count !== 0 && (
        <div
          className="carousel__control-prev"
          onClick={handleCarouselScroll}
          data-type="prev"
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
          >
            <path
              d="M16.2426 6.34292L14.8284 4.92871L7.75732 11.9998L14.8284 19.0708L16.2426 17.6566L10.5857 11.9998L16.2426 6.34292Z"
              fill={navColor}
            />
          </svg>
        </div>
      )}
      {count !== maxCount - 1 && (
        <div
          className="carousel__control-next"
          onClick={handleCarouselScroll}
          data-type="next"
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
          >
            <path
              d="M7.75743 6.34292L9.17164 4.92871L16.2427 11.9998L9.17161 19.0708L7.75739 17.6566L13.4143 11.9998L7.75743 6.34292Z"
              fill={navColor}
            />
          </svg>
        </div>
      )}

      {dotNav && (
        <div className="carousel__nav">
          {[...Array(maxCount)].map((n, i) => {
            return (
              <button
                key={i}
                className={`carousel__nav-btn ${i === 0 ? "select" : ""}`}
                style={{ backgroundColor: `var(--${navColor})` }}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
