import React from "react";

import nativeImgMob from "../../assets/png/native-section.png";
import nativeImgDesk from "../../assets/png/native-section-desk.png";
import "./Section11.css";
export default function Section11() {
  return (
    <section className="section-11">
      <div className="wrapper">
        <div className="section-11__content">
          <h1>
            Our customers are{" "}
            <span style={{ color: "var(--primary" }}>superheroes </span> – we
            are their growth partners
          </h1>
          <hr className="hr-underline"></hr>
          <p>
            Righting the wrongs of insurance technology for global insurance
            organizations. Leading organizations in the world utilize
            Artivatic’s suite of solutions Artivatic believes in collaborative
            growth with all of its stakeholders.
          </p>
        </div>
        <div className="img-container">
          <img
            src={nativeImgMob}
            alt="section-11-img"
            className="section-11__img mob"
          />
          <img
            src={nativeImgDesk}
            alt="section-11-img"
            className="section-11__img desk"
          />
          <div className="fade"></div>
        </div>
      </div>
    </section>
  );
}
