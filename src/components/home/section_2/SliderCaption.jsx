"use client";

import { motion, AnimatePresence } from "framer-motion";
import { sliderImages } from "@/variables/home/section_2";

const SliderCaption = ({ currentIndex, textRef, isInView }) => {

  return (
    <div
      ref={textRef}
      className="h-[100px] flex items-center justify-center relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key={sliderImages[currentIndex].title}
            className="absolute text-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {},
              animate: {},
              exit: {},
            }}
          >
            {/* Title */}
            <motion.h1
              className="text-2xl font-semibold"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.4 }}
            >
              {sliderImages[currentIndex].title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base mt-1"
              variants={{
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
            >
              {sliderImages[currentIndex].desc}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SliderCaption;
