import React from "react";

const NoiseFilter = () => {
  return (
    <svg className="z-10 w-0 h-0">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          stitchTiles="stitch"
        />
        <feColorMatrix
          in="colorNoise"
          type="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
        />
        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
        <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
      </filter>
    </svg>
  );
};

export default NoiseFilter;
