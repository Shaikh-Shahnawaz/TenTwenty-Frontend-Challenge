"use client";

import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Slick from "react-slick";
import { sliderImages, sliderResponsiveSetting } from "@/variables/home/section_2";
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
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: true,
    afterChange: (index) => setCurrentIndex(index),
    responsive:sliderResponsiveSetting
  }

  return (
    <div className="max-w-[100vw] overflow-hidden px-4">
      {/* Slider */}
      <Slick {...settings}>
        {sliderImages.map((ele, index) => (
          <div key={index} className="px-2">
            <div className="relative w-[300px] h-[400px] mx-auto">
              <Image
                src={ele.src}
                alt={ele.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </Slick>

      {/* Animated Text */}
        <SliderCaption isInView={isInView} textRef={textRef} currentIndex={currentIndex}  />
    </div>
  );
};

export default ProductSlider;
