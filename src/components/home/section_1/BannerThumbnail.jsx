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
  totalImages
}) => {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (thumbnailDuration === 0) {
      // reset key to restart stroke animation
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
        {/* Snake Border SVG */}
        {renderSnakeBorderSVG({ animKey, animationStyle })}

        {/* Content Box */}
        <div className="relative w-20 aspect-square overflow-hidden z-10">
          <p className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10">
            Next
          <span className="text-[red]" >0{currentIndex+1} ------- 0{totalImages}</span>
          </p>
          <BannerSlider
            currentIndex={currentIndex}
            nextIndex={nextIndex}
            isAnimating={isAnimating}
          />
        </div>
      </div>
    
  );
};

export default BannerThumbnail;
