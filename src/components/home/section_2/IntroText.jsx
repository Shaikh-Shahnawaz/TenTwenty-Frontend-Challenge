"use client";

import { motion } from "framer-motion";

const IntroText = () => {
  return (
    <motion.div
      className="w-full my-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: {},
        hidden: {},
      }}
    >
      {/* Title */}
      <motion.h1
        className="text-5xl text-center py-4"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        Quality Products
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-[grey] my-4 w-[60%] text-center text-1xl mx-auto"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel numquam
        tempora fuga mollitia ipsa blanditiis cupiditate natus atque suscipit
        autem porro tenetur ratione ullam, in ex sapiente cum qui vitae aliquam
        magni placeat magnam neque.
      </motion.p>
    </motion.div>
  );
};

export default IntroText;
