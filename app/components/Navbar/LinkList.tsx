import React from "react";
import NavLink from "./NavLink";

export const NavbarLinks = () => {
  return (
    <div className="menu">
      <NavLink Title="Currently Showing" Path="/currentlyshowing" />
      <NavLink Title="Get Tickets" Path="/gettickets" />
      <NavLink Title="About us" Path="/aboutus" />
      <NavLink Title="Contact" Path="/contact" />{" "}
    </div>
  );
};
