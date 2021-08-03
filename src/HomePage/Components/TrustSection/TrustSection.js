import React from "react";

import nativeImgMob from "../../../Assets/png/native-section.png";
import nativeImgDesk from "../../../Assets/png/native-section-desk.png";
import "./TrustSection.css";
export default function TrustSection() {
  return (
    <section className="trust-section native-section">
      <div className="wrapper">
        <div className="native-section__content">
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
            alt="native-img"
            className="native-section__img mob"
          />
          <img
            src={nativeImgDesk}
            alt="native-img"
            className="native-section__img desk"
          />
          <div className="fade"></div>
        </div>
      </div>
    </section>
  );
}
