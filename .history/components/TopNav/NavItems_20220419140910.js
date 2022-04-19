import Link from "next/link";
import React from "react";
import "../LinkData";


// delete

import briefcase from "../components/svgs/briefcase-02-01.svg";
import ash from "../components/svgs/ash-02.svg";
import bell from "../components/svgs/bell.svg";
import msg from "../components/svgs/msg.svg";
import fav from "../components/svgs/fav.svg";
import profile from "../components/svgs/unsplash_x9cXI2eQLBw.svg";


const NavItems = ({ LinkData }) => {
  return (
    <div>
      {LinkData.map((link) => {
        return <h1 key={link.id}> {link.name}</h1>;
      })}
    </div>
  );
};

export default NavItems;
