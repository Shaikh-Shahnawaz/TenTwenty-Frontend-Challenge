function getStrokeAnimationStyle(duration) {
  return duration > 0
    ? {
        animation: `draw-border ${duration}s linear infinite`,
      }
    : { animation: "none" };
}

function renderSnakeBorderSVG({ animKey, animationStyle }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect
        key={animKey}
        x="1"
        y="1"
        width="98"
        height="98"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeDasharray="1"
        strokeDashoffset="1"
        pathLength="1"
        style={animationStyle}
      />
    </svg>
  );
}


export {getStrokeAnimationStyle,renderSnakeBorderSVG}
