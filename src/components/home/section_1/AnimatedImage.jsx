import Image from "next/image";
import { motion } from 'framer-motion';
import { animatedImageVars } from "@/variables/home/section_1";
const AnimatedImage = ({ src, alt}) => {
  return (
    <motion.div
     initial={animatedImageVars[alt].initial}
      animate={animatedImageVars[alt].animate}
      transition={animatedImageVars[alt].transition}
      className="absolute inset-0 w-full h-full"
    >
      <Image src={src} alt={alt} fill className="object-cover bannerImage" priority />
    </motion.div>
  );
};

export default AnimatedImage;
