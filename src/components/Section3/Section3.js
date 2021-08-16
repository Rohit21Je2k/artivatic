import React from "react";

import award1 from "../../assets/png/awards/award-1.png";
import award2 from "../../assets/png/awards/award-2.png";
import award3 from "../../assets/png/awards/award-3.png";
import award4 from "../../assets/png/awards/award-4.png";
import award5 from "../../assets/png/awards/award-5.png";

import "./Section3.css";
export default function Section3() {
  return (
    <section className="section-3">
      <div className="wrapper">
        <h1 className="section-3__heading">Awards & Recognition</h1>
        <hr className="underline" />
        <div className="img-container">
          <img className="section-3__img" src={award1} alt="award-1" />
          <img className="section-3__img" src={award2} alt="award-2" />
          <img className="section-3__img" src={award3} alt="award-3" />
          <img className="section-3__img" src={award4} alt="award-4" />
          <img className="section-3__img" src={award5} alt="award-5" />
        </div>
      </div>
    </section>
  );
}
