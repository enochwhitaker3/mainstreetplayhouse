"use client";
import React, { useState } from "react";
import Diamond from "@/app/assests/Diamond";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ Title, Path }: { Title: string; Path: string }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  console.log(Path);
  return (
    <Link
      className="relative flex flex-row justify-center items-center font-bold cursor-pointer gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={Path}
    >
      <div className="absolute left-[-0.75rem] z-[-2]">
        <Diamond
          isHovered={isHovered}
          isClicked={pathname == Path}
          position="left"
        />
      </div>
      <h3 className={`link ${pathname == Path ? "selectedlink" : ""}`}>
        {Title}
      </h3>
      <div className="absolute right-[-0.75rem] z-[-2]">
        <Diamond
          isHovered={isHovered}
          isClicked={pathname == Path}
          position="right"
        />
      </div>
    </Link>
  );
};

export default NavLink;
