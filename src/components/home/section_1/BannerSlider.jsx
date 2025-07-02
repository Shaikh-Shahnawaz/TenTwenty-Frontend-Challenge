import { bannerImages, bannerMotionVars } from "@/variables/home/section_1"
import AnimatedImage from "./AnimatedImage"
import { motion } from "framer-motion";

const BannerSlider = ({currentIndex,nextIndex,isAnimating}) => {
  return (
    <>
    {/* Current Image */}
      <AnimatedImage src={bannerImages[currentIndex]} alt="currentBanner" />

      {/* Overlay Next Image with Animation */}
      {nextIndex !== null && (
        <motion.div
          className="bannerImage overlayWrapper"
          initial={false}
          animate={isAnimating ? bannerMotionVars.animate : {}}
          transition={bannerMotionVars.transition}
          style={bannerMotionVars.style}
        >
          <AnimatedImage src={bannerImages[nextIndex]} alt="nextBanner" />
        </motion.div>
      )}
    
    </>
  )
}

export default BannerSlider