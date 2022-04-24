import Link from "next/link";
import { React, useState } from "react";
import Search from "./Search";
import { TopNavMobile } from "../TopNavMobile";
import { Aside } from "../Aside";
import { AccountLinks } from "../AccountLinks";

// All design are been adjusted to mobile first
export const TopNav = () => {

  return (
    <div className=" shadow-sm ">
      {/* tablet and extended*/}
      <div className=" relative container mx-auto  ">
        <TopNavMobile />
        <div className="wrap hidden lg:flex  bg-red-300">
          <Search widthStyle=" w-screen ml-4 hover:text-green-400 rounded-full hidden md:block lg:w-aut " />
          <AccountLinks />
        </div>
      </div>
    </div>
  );
};
