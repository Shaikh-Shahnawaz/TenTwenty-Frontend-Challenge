const bannerImages = [
  "/images/home/banner/banner_1.webp",
  "/images/home/banner/banner_2.webp",
  "/images/home/banner/banner_3.webp",
  "/images/home/banner/banner_4.webp",
];

const bannerText = [
  {
    data: "Welcome To TenTwenty Farms",
    className: "text-2xl md:text-2xl font-semibold",
  },
  {
    data: "From Our Farms",
    className: "text-4xl md:text-6xl font-semibold",
  },
  {
    data: "To Your Hands",
    className: "text-4xl md:text-6xl font-semibold",
  },
];

const wordMotionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  })
};

const bannerMotionVars = {
  animate: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0 0% 0)",
  },
  transition: { duration: 1.5, ease: "easeOut" },
  style: {
    opacity: 0,
    scale: 0.8,
    clipPath: "inset(50% 0 50% 0)",
  },
};

const animatedImageVars = {
  currentBanner:{
    initial: {
        opacity: 0,
        scale:0.1,
        zIndex:0,
      },
      animate:{
        opacity: 1,
        scale: 1,
      },
      transition:{
        duration:1.2,
        ease: 'easeOut',
      }
  },
  nextBanner:{
    initial: {
        opacity: 0,
        scale: 0.8,
        clipPath: 'inset(50% 0 50% 0)',
        zIndex:1,
      },
      animate:{
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0% 0 0% 0)',
      },
      transition:{
        duration:1.5,
        ease: 'easeOut',
      }
  },
}

export { bannerImages, bannerText, wordMotionVariants, bannerMotionVars,animatedImageVars };
