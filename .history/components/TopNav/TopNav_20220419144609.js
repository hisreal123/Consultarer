import Link from "next/link";
import React from "react";
import Logo from "../svgs/logo.svg";


// svg-icons

import Briefcase from "../svgs/briefcase-02-01.svg";
import ash from "../svgs/ash-02.svg";
import bell from "../svgs/bell.svg";
import msg from "../svgs/msg.svg";
import fav from "../svgs/fav.svg";
import profile from "../svgs/unsplash_x9cXI2eQLBw.svg";

export const TopNav = () => {
  return (
    <div className="h-screen bg-red-100">
      <h1> logo Working </h1>
      <briefcase className="text-6xl" />
      <Logo className=" text-6xl " />
    </div>
  );
};
