import React from "react";
import Image from "next/image";
import Actors from "../../public/Actors.png";
import Blobs from "./blob";

const Hero = () => {
  return (
    <div className="hero relative">
      <Blobs />
      <div className="w-full flex flex-col items-center mt-4">
        <h1>
          Tremonton&apos;s one and <i>only</i> live theatre{" "}
        </h1>
        <Image
          src={Actors}
          alt="actors"
          width={250}
          height={250}
          className="mt-[-36px]"
        />
      </div>
    </div>
  );
};

export default Hero;
