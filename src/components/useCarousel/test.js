import React from "react";

import Card from "../card/card.js";
import Carousel123 from "../carousel/carousel.js";
import "./test.css";
export default function Test() {
  return (
    <div className="test">
      <Carousel123 fade="primary-vl" navColor="gray-700">
        <Card
          tag="Case study"
          title="Role of Telehealth During COVID-19"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          ancLink="/"
          btnText="View all case studies"
        />
        <Card
          tag="Case study"
          title="Role of Telehealth During COVID-19"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          ancLink="/"
          btnText="View all case studies"
        />
        <Card
          tag="Case study"
          title="Role of Telehealth During COVID-19"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          ancLink="/"
          btnText="View all case studies"
        />
        <Card
          tag="Case study"
          title="Role of Telehealth During COVID-19"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          ancLink="/"
          btnText="View all case studies"
        />
        <Card
          tag="Case study"
          title="Role of Telehealth During COVID-19"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          ancLink="/"
          btnText="View all case studies"
        />
        <Card
          tag="Case study"
          title="Role of Telehealth During COVID-19"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus neque at."
          ancLink="/"
          btnText="View all case studies"
        />
      </Carousel123>
    </div>
  );
}
