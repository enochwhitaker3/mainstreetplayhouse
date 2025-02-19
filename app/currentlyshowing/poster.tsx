import React from "react";
import Image from "next/image";
import Actors from "../../public/posterborder.png";
import Blobs from "../components/blob";

const Poster = () => {
  return (
    <div className="hero relative ">
      <Blobs />
      <div className="w-full flex flex-col items-center mt-4">
        <h1>Currently Showing</h1>
        <Image
          src={Actors}
          alt="actors"
          width={250}
          height={250}
          className="mt-[-36px] z-[-2]"
        />
      </div>
    </div>
  );
};

export default Poster;
