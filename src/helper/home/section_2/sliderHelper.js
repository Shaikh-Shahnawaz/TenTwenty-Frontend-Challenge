const getCardTransform = (index, currentIndex, totalSlides) => {
  let rotate = 0;
  // Determine rotation based on position
  if (index !== currentIndex) {
    if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
      rotate = -10; // rotate left
    } else if (index === (currentIndex + 1) % totalSlides) {
      rotate = 10; // rotate right
    } else {
      rotate = 0;
    }
  }
  return rotate;
};

export {getCardTransform}
