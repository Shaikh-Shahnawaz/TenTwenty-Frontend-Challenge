import AnimatedImage from "./AnimatedImage";

const BannerThumbnail = ({ src, nextImage }) => {
  return (
    <div
      onClick={nextImage}
      className="relative w-40 aspect-square border border-white cursor-pointer overflow-hidden"
    >
      <AnimatedImage
        src={src}
        alt="Thumbnail"
        variantKey="currentBanner" // reuse the same variant
      />
    </div>
  );
};

export default BannerThumbnail;
