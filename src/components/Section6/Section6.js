import React from "react";

import Card from "../../../components/card/card";
import Carousel from "../../../components/carousel/carousel";
import "./section6.css";
export default function Section6() {
  return (
    <section className="section-6">
      <div className="wrapper">
        <h1 className="section-6__heading">
          Artivatic is products designed for all user-driven scenarios.
        </h1>

        <hr className="hr-underline"></hr>

        <Carousel fade="primary" navColor="#fff" dotNav={true}>
          <Card
            type="hover"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          />
          <Card
            type="hover"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          />
          <Card
            type="hover"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          />
          <Card
            type="hover"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          />
          <Card
            type="hover"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          />
          <Card
            type="hover"
            title="Role of Telehealth During COVID-19"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          />
        </Carousel>
      </div>
    </section>
  );
}
