import React from "react";
import Frame from "./frame";
import Details from "./details";

const Poster = () => {
  return (
    <div className="hero relative">
      {/* <Blobs /> */}
      <div className="w-full flex flex-col items-center">
        <h1>Currently Showing</h1>
        <div className="flex flex-row  mt-4 ">
          <Frame />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Poster;
