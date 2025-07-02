import Image from "next/image";
import { motion } from "framer-motion";
import { animatedImageVars } from "@/variables/home/section_1";

/**
 * @param {string} src - Image source
 * @param {string} alt - Image alt text, also used as key for variant
 * @param {string} variantKey - Optional: manually provide animation variant (defaults to alt)
 * @param {string} className - Optional: allows custom wrapper class (e.g., square aspect)
 */
const AnimatedImage = ({ src, alt, variantKey, className = "" }) => {
  const key = variantKey || alt;
  const { initial, animate, transition } = animatedImageVars[key] || {};

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={`absolute inset-0 w-full h-full ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover bannerImage"
        priority
      />
    </motion.div>
  );
};

export default AnimatedImage;
