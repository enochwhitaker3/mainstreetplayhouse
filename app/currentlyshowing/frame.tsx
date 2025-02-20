import React from "react";
import FrameImage from "../../public/frameborder.png";
import PosterImage from "../../public/variety.jpg";
import Image from "next/image";

const Frame = () => {
  return (
    // Container is sized to the frame image dimensions
    <div className="relative w-[350px] h-[450px] mx-8">
      {/* Poster centered inside the container */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black z-[-3] h-[400px] w-[300px]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={PosterImage}
          alt="Poster"
          objectFit="cover"
          className="z-[-3] h-[350px] w-[250px] "
        />
      </div>

      {/* Frame fills the container */}
      <Image
        src={FrameImage}
        alt="Frame"
        layout="fill"
        objectFit="contain"
        className="z-[-2]"
      />
    </div>
  );
};

export default Frame;
