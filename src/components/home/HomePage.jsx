"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedText from "./section_1/AnimatedText.jsx";
import SectionOne from "./section_1/SectionOne.jsx";
import SectionTwo from "./section_2/SectionTwo.jsx";

const HomePage = () => {
  const [showText, setShowText] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showNav,setShowNav] = useState(false)

  useEffect(() => {
    if (!showText) {
      // Wait for exit animation to complete before showing home page
      const bannerTimer = setTimeout(() => {
        setShowBanner(true);
      }, 1000); // match exit duration

      const navTimer = setTimeout(()=>{
        setShowNav(true)
      },2000)

      return () => {
      
        clearTimeout(bannerTimer);
        clearTimeout(navTimer);
      }
        
    }
  }, [showText]);

  return (
    <>
      <div className={`bg-black w-full h-screen relative overflow-hidden ${showNav ?"z-0":"z-20"} `}>
        <AnimatePresence mode="wait">
          {showText && (
            <AnimatedText key="bannerText" setShowText={setShowText} />
          )}
        </AnimatePresence>
        {showBanner && <SectionOne />}
      </div>

      {showBanner && <SectionTwo />}
    </>
  );
};

export default HomePage;
