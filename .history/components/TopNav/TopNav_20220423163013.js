import Link from "next/link";
import { React, useState } from "react";
import Search from "./Search";
import { TopNavMobile } from "../TopNavMobile";

// All design are been adjusted to mobile first
export const TopNav = () => {
  return (
    <div className=" shadow-sm ">
      {/* tablet and extended*/}
      <div className=" relative container mx-auto  ">
        <TopNavMobile />
          <Search widthStyle="w-screen ml-4 hover:text-green-400 rounded-full hidden  
        <div className="wrap">md:block " />
        </div>
      </div>
    </div>
  );
};
