import StreetLamp from "@/app/assests/street_lamp";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h3 className="font-bold flex items-center space-x-2 noise-text z-[-2]">
        Main Street Playhouse
        <span className="w-7 h-7 flex items-center pb-3 relative">
          <StreetLamp />
        </span>
      </h3>
    </Link>
  );
};

export default Logo;
