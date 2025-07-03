"use client";

import { bannerText, wordMotionVariants } from "@/variables/home/section_1";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AnimatedText = ({ setShowText })=> {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  let globalIndex = 0;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-white text-center space-y-2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 1 } }}
    >
      {bannerText?.map((line, lineIndex) => {
        const words = line?.data?.split(" ");

        return (
          <div key={lineIndex} className={`flex flex-wrap gap-2 justify-center ${line.className}`}>
            {words.map((word, wordIndex) => {
              const index = globalIndex++;
              return (
                <motion.span
                  key={`${word}-${index}`}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={wordMotionVariants}
                  className={line.className}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}
export default AnimatedText;