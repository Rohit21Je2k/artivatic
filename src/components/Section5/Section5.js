import React from "react";

import nativeImgMob from "../../assets/png/native-section.png";
import nativeImgDesk from "../../assets/png/native-section-desk.png";
import "./Section5.css";
export default function Section5() {
  return (
    <section className="section-5">
      <div className="wrapper">
        <div className="section-5__content">
          <h1>
            Over <span style={{ color: "var(--primary" }}>20+ </span>native
            integrations out of the box
          </h1>
          <hr className="hr-underline"></hr>
          <p>
            Artivatic makes all your tools work better by letting you integrate
            industry-leading software and custom apps.
          </p>
          <ul>
            <li>Import data from other apps</li>
            <li>Export form submission to other apps</li>
            <li>Trigger emails using other CRMs</li>
            <li>Add Shopify cart, Calendly etc. inside email</li>
          </ul>
        </div>
        <div className="img-container">
          <img
            src={nativeImgMob}
            alt="section-5-img"
            className="section-5__img mob"
          />
          <img
            src={nativeImgDesk}
            alt="section-5-img"
            className="section-5__img desk"
          />
          <div className="fade"></div>
        </div>
      </div>
    </section>
  );
}
