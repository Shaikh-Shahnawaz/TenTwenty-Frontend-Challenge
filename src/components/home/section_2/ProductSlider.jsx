"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Slick from "react-slick";
import {
  sliderImages,
  sliderResponsiveSetting,
} from "@/variables/home/section_2";
import SliderCaption from "./SliderCaption";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="max-w-[100vw] overflow-hidden px-4 mt-5">
      <Slick {...settings}>
        {sliderImages.map((ele, index) => {
          let rotate = 0;

          // Determine rotation based on position
          if (index !== currentIndex) {
            // If one step left of center
            if (
              index === (currentIndex - 1 + sliderImages.length) % sliderImages.length
            ) {
              rotate = -10; // rotate left
            }
            // If one step right of center
            else if ((index === (currentIndex + 1) % sliderImages.length)) {
              rotate = 10; // rotate right
            }
            // Farther cards (optional): fade or scale if needed
            else {
              rotate = 0;
            }
          }

          return (
            <div key={index} className="px-2">
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
                  className="object-cover rounded-xl shadow-lg"
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
  );
};

export default ProductSlider;
