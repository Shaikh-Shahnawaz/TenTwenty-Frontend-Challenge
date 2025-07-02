"use client";

import { bannerText, wordMotionVariants } from "@/variables/home/section_1";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function BannerText({ setShowText }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  let globalIndex = 0;

  return (
    <motion.div
      className="bannerText absolute z-10 text-white text-center w-full top-[35%] px-4 space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 1 } }}
    >
      {bannerText?.map((line, lineIndex) => {
        const words = line?.data?.split(" ");

        return (
          <div key={lineIndex} className="flex  flex-wrap gap-2">
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
