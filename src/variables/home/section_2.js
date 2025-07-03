const sliderImages = [

    {
        src:"/images/home/slider/uae_1.webp",
        title: "Dubai, UAE",
    desc: "Experience the luxury and skyline of Dubai in the United Arab Emirates."
    },
    {
        src:"/images/home/slider/india_2.webp",
         title: "Mumbai, India",
    desc: "Dive into the bustling streets and vibrant culture of Mumbai, Maharashtra."
    },
    {
        src:"/images/home/slider/russia_3.webp",
        title: "Moscow, Russia",
    desc: "Discover historic landmarks and architecture in Moscow, Moscow Oblast."
    },
    {
        src:"/images/home/slider/china_4.webp",
         title: "Shanghai, China",
    desc: "Explore the futuristic skyline of Shanghai in China's coastal province."
    }
];

const sliderResponsiveSetting = [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ]

export {sliderImages,sliderResponsiveSetting}