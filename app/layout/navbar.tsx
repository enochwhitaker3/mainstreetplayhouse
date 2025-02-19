import React from "react";
import { NavbarLinks } from "../components/Navbar/LinkList";
import Logo from "../components/Navbar/Logo";

const Nav = () => {
  return (
    <nav className="nav mobile:h-16 h-24 w-full mb-4">
      <Logo />
      <NavbarLinks />
    </nav>
  );
};

export default Nav;
