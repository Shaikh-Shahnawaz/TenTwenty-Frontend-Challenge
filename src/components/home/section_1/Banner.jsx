"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { bannerImages, bannerMotionVars } from "@/variables/home/section_1";
import "./Banner.css";
import AnimatedImage from "./AnimatedImage";
import BannerThumbnail from "./BannerThumbnail";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const timerRef = useRef(null);
  const currentIndexRef = useRef(currentIndex);

  const triggerAnimation = (next) => {
    setNextIndex(next);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(next);
      setIsAnimating(false);
      setNextIndex(null);
    }, 1500); // match animation duration
  };

  const nextImage = () => {
    // console.log("currentIndex =>", currentIndex);
    const next = (currentIndex + 1) % bannerImages.length;
    // console.log("next =>", next);
    triggerAnimation(next);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % bannerImages.length;
      // console.log("Auto next =>", next);
      triggerAnimation(next);
    }, 6000);
  };

  // Keep ref in sync with currentIndex
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Set interval only once
  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (

    <div className="bannerWrapper">
      <BannerThumbnail isAnimating={isAnimating} alt="nextBanner" src={bannerImages[currentIndex]} nextImage={nextImage} />
      {/* Base image - always rendered */}
      <AnimatedImage src={bannerImages[currentIndex]} alt="currentBanner" />

      {/* Animated overlay */}
      <motion.div
        className={`bannerImage overlayWrapper ${
          isAnimating ? "visible" : "hidden"
        }`}
        initial={false}
        animate={isAnimating ? bannerMotionVars.animate : {}}
        transition={bannerMotionVars.transition}
        style={bannerMotionVars.style}
      >
        {nextIndex !== null && (
          <AnimatedImage src={bannerImages[nextIndex]} alt="nextBanner" />
        )}
      </motion.div>
    </div>
  );
}
