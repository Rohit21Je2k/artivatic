import React from "react";

import "./NavSubGridCard.css";
export default function NavSubGridCard(props) {
  const { title, list } = props;
  return (
    <div className="nav__sub-grid__card">
      <h4 className="nav__sub-grid__card__h4">{title}</h4>
      <ul className="nav__sub-grid__card__ul">
        {list &&
          list.map((item, index) => {
            return (
              <li key={index} className="nav__sub-grid__card__li">
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
