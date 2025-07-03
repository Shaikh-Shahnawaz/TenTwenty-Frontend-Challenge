"use client";

import React, { useRef, useState } from "react";
import { motion,useInView } from "framer-motion";
import Slick from "react-slick";
import {
  sliderImages,
  sliderResponsiveSetting,
} from "@/variables/home/section_2";
import SliderCaption from "./SliderCaption";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCardTransform } from "@/helper/home/section_2/sliderHelper";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const settings = {
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    arrows: true,
    afterChange: (index) => setCurrentIndex(index),
    responsive: sliderResponsiveSetting,
  };

  return (
    <div className="max-w-[100vw] overflow-hidden px-4 my-5 sm:my-10 h-[50dvh] relative sm:h-[70dvh] md:h-screen">
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
        <Slick {...settings}>
          {sliderImages.map((ele, index) => {

            const rotate = getCardTransform(
              index,
              currentIndex,
              sliderImages.length
            );

            return (
              <div key={index} className="px-2 py-3 md:py-20">
                <motion.div
                  animate={{ rotate }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 0.5,
                  }}
                  className="relative w-[90%] max-w-[300px] h-[65vw] max-h-[400px] mx-auto"
                >
                  <Image
                    src={ele.src}
                    alt={ele.title}
                    fill
                    className="object-cover shadow-lg"
                  />
                </motion.div>
              </div>
            );
          })}
        </Slick>

        <SliderCaption
          isInView={isInView}
          textRef={textRef}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
