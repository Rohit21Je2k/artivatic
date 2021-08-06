import React from "react";

import Card from "../../../components/Card/Card.js";
import Carousel from "../../../components/Carousel/Carousel.js";

import "./SolutionSection.css";
export default function SolutionSection() {
  return (
    <section className="section-6">
      <div className="wrapper">
        <h1 className="section-6__heading">Industy Solutions</h1>

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
