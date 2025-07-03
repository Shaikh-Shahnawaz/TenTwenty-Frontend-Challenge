"use client";
import {
  getStrokeAnimationStyle,
  renderSnakeBorderSVG,
} from "@/helper/home/section_1/animationHelper";
import BannerSlider from "./BannerSlider";
import { useState, useEffect, useMemo } from "react";

const BannerThumbnail = ({
  currentIndex,
  nextIndex,
  isAnimating,
  onClick,
  thumbnailDuration,
  totalImages,
}) => {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (thumbnailDuration === 0) {
      setAnimKey((prev) => prev + 1);
    }
  }, [thumbnailDuration]);

  const animationStyle = useMemo(() => {
    return getStrokeAnimationStyle(thumbnailDuration);
  }, [thumbnailDuration]);

  return (
    <div
      onClick={onClick}
      className="absolute bottom-[25%] left-[10%] p-5 bg-transparent cursor-pointer z-[9999]"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-30 aspect-square overflow-hidden">
          {renderSnakeBorderSVG({ animKey, animationStyle })}
          <div className="absolute inset-4 z-10">
            <p className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10 drop-shadow-[0_2px_4px_black]">
              Next
            </p>

            <BannerSlider
              currentIndex={currentIndex}
              nextIndex={nextIndex}
              isAnimating={isAnimating}
            />
          </div>
        </div>

        <span className="text-white text-sm font-medium drop-shadow-[0_2px_4px_black]">
          0{(isAnimating && nextIndex !== null ? nextIndex : currentIndex) + 1} ------------ 0{totalImages}
        </span>
      </div>
    </div>
  );
};

export default BannerThumbnail;
