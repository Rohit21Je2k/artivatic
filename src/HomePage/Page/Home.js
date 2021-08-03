import React from "react";

import IntoSection from "../Components/IntroSection/IntoSection.js";
import AboutSection from "../Components/AboutSection/AboutSection.js";
import AwardSection from "../Components/AwardSection/AwardSection.js";
import InsuranceCloudSection from "../Components/InsuranceCloudSection/InsuranceCloudSection.js";
import NativeSection from "../Components/NativeSection/NativeSection.js";
import Carousel from "../Components/Carousel/Carousel.js";
import NewProductSection from "../Components/NewProductsSection/NewProductSection.js";
import ProductsSection from "../Components/ProductsSection/ProductsSection.js";

export default function Home() {
  return (
    <div id="home">
      <IntoSection />
      <AboutSection />
      <AwardSection />
      <InsuranceCloudSection />
      <NativeSection />
      <Carousel />
      <NewProductSection />
      <ProductsSection />
    </div>
  );
}
