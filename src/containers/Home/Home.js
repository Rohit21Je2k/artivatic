import React from "react";

import Section1 from "../../components/Section1/Section1.js";
import Section2 from "../../components/Section2/Section2.js";
import Section3 from "../../components/Section3/Section3.js";
import Section4 from "../../components/Section4/Section4.js";
import Section5 from "../../components/Section5/Section5.js";
import Section6 from "../../components/Section6/Section6.js";
import Section7 from "../../components/Section7/Section7.js";
import Section8 from "../../components/Section8/Section8.js";
import Section9 from "../../components/Section9/Section9.js";
import Section10 from "../../components/Section10/Section10.js";
import Section11 from "../../components/Section11/Section11.js";
import Testimonial from "../../components/Testimonial/Testimonial.js";
import Section12 from "../../components/Section12/Section12.js";
import NewsLetter from "../../components/NewsLetter/NewsLetter.js";

import "./Home.css";
export default function Home() {
  return (
    <div id="home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Testimonial />
      <Section12 />
      <NewsLetter />
    </div>
  );
}
