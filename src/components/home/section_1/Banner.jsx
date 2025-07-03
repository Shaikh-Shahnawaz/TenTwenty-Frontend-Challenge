"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { bannerImages } from "@/variables/home/section_1";
import BannerThumbnail from "./BannerThumbnail";
import BannerSlider from "./BannerSlider";

const DEFAULT_DURATION = 6; 
const TRANSITION_DURATION = 1500; // this should same as banner animation duration
const totalImages = bannerImages.length

export default function Banner() {
  const [thumbnailDuration, setThumbnailDuration] = useState(DEFAULT_DURATION);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const timerRef = useRef(null);
  const currentIndexRef = useRef(currentIndex);

  // Handles image + animation trigger
  const triggerAnimation = useCallback((next) => {
    setNextIndex(next);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(next);
      currentIndexRef.current = next;
      setIsAnimating(false);
      setNextIndex(null);
    }, TRANSITION_DURATION);
  }, []);

  // Click handler to go to next image
  const nextImage = useCallback(() => {
    setThumbnailDuration(0);
    requestAnimationFrame(() => {
      setThumbnailDuration(DEFAULT_DURATION);
    });
    const next = (currentIndexRef.current + 1) % totalImages;
    triggerAnimation(next);
    resetTimer();
  }, [triggerAnimation]);

  // auto-advance image every DEFAULT_DURATION seconds
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % totalImages;
      triggerAnimation(next);
    }, DEFAULT_DURATION * 1000);
  }, [triggerAnimation]);

  // sync with currentIndex
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // start auto-play
  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Thumbnail with snake animation */}
      <BannerThumbnail
        currentIndex={currentIndex}
        nextIndex={nextIndex}
        isAnimating={isAnimating}
        onClick={nextImage}
        thumbnailDuration={thumbnailDuration}
        totalImages={totalImages}
      />

      {/* Main Banner Image Slider */}
      <BannerSlider
        currentIndex={currentIndex}
        nextIndex={nextIndex}
        isAnimating={isAnimating}
      />
    </div>
  );
}
