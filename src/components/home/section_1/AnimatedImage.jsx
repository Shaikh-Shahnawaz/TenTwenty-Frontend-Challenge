"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { animatedImageVars } from "@/variables/home/section_1";

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
