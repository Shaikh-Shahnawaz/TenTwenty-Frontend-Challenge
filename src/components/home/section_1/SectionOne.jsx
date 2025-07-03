"use client";
import Banner from "./Banner";
import BannerText from "./BannerText";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FinalStaticText from "./FinalStaticText";

const SectionOne = () => {
  const [showText, setShowText] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!showText) {
      // Wait for exit animation to complete before showing Banner
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000); // match exit duration

      return () => clearTimeout(timer);
    }
  }, [showText]);

  return (
    <div className="bg-black w-full h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {showText && <BannerText key="bannerText" setShowText={setShowText} />}
      </AnimatePresence>

      {showBanner && (
        <>
        <FinalStaticText/>
        <Banner />
        </>
      )
      
      }
    </div>
  );
};

export default SectionOne;
