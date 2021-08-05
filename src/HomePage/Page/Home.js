import React from "react";

import IntoSection from "../Components/IntroSection/IntoSection.js";
import AboutSection from "../Components/AboutSection/AboutSection.js";
import AwardSection from "../Components/AwardSection/AwardSection.js";
import InsuranceCloudSection from "../Components/InsuranceCloudSection/InsuranceCloudSection.js";
import NativeSection from "../Components/NativeSection/NativeSection.js";

import NewProductSection from "../Components/NewProductsSection/NewProductSection.js";
import ProductsSection from "../Components/ProductsSection/ProductsSection.js";
import SolutionSection from "../Components/SolutionSection/SolutionSection.js";
import FeatureSection from "../Components/FeatureSection/FeatureSection.js";
import TrustSection from "../Components/TrustSection/TrustSection.js";
import Testimonial from "../Components/Testimonial/Testimonial.js";
import ResourcesSection from "../Components/ResourcesSection/ResourcesSection.js";
import NewsLetterSection from "../Components/NewsLetterSection/NewsLetterSection.js";
import Footer from "../Components/Footer/Footer.js";

import Test from "../../components/useCarousel/test.js";
import Section6 from "../Components/Section6/Section6.js";

export default function Home() {
  return (
    <div id="home">
      <IntoSection />
      <AboutSection />
      <AwardSection />
      <InsuranceCloudSection />
      <NativeSection />
      <Section6 />
      <NewProductSection />
      <ProductsSection />
      <SolutionSection />
      <FeatureSection />
      <TrustSection />
      <Testimonial />
      <ResourcesSection />
      <NewsLetterSection />
      <Footer />
      <Test />
    </div>
  );
}
