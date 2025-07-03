"use client";

import ProductSlider from "./ProductSlider";
import IntroText from "./IntroText";
import "./sectionTwo.css";

const SectionTwo = () => {
  return (
    <div className="sm:my-6 md:my-6">
      <IntroText />
      <ProductSlider />
    </div>
  );
};

export default SectionTwo;
