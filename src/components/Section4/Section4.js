import React from "react";

import insuranceCloudImg from "../../assets/png/insurance cloud-mob.png";
import "./Section4.css";
export default function Section4() {
  return (
    <section className="section-4">
      <div className="wrapper">
        <h1 className="heading-1">The Insurance Cloud</h1>
        <hr className="hr-underline"></hr>
        <img src={insuranceCloudImg} alt="cloud-img" className="img" />
        <h2 className="heading-2">
          <span style={{ color: "var(--primary" }}>400+ APIs </span>available
          for building <span style={{ color: "var(--primary" }}>Next-gen </span>
          Insurtech.
        </h2>
        <a href="/" className="btn btn--sm btn--toggle">
          Explore More
        </a>
      </div>
    </section>
  );
}
