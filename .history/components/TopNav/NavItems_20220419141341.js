import Link from "next/link";
import React from "react";
import "../LinkData";

// delete

import briefcase from "../svgs/briefcase-02-01.svg";
import ash from "../svgs/ash-02.svg";
import bell from "../svgs/bell.svg";
import msg from "../svgs/msg.svg";
import fav from "../svgs/fav.svg";
import profile from "../svgs/unsplash_x9cXI2eQLBw.svg";

export const LinkData = [
  {
    id: 1,
    name: " Workplace",
    src: `${briefcase}`,
  },

  {
    id: 2,
    name: "Hub",
    src: `${ash}`,
  },

  {
    id: 3,
    name: " Notification",
    src: `${bell}`,
  },

  {
    id: 4,
    name: " Message",
    src: `${msg}`,
  },

  {
    id: 5,
    name: " Favourite",
    src: `${fav}`,
  },

  {
    id: 6,
    name: " Profile",
    src: `${profile}`,
  },
];

const NavItems = () => {
  return (
    <div>
      {LinkData || [].map(({id, name})) => {
        <h1> {link.name}</h1>;
      })}
    </div>
  );
};

export default NavItems;
