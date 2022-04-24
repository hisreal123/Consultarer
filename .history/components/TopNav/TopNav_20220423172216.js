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
      <div className=" relative lg:flex item-center ">
        <TopNavMobile />
        <div className="wrap hidden lg:flex  bg-red-300 ">
          <Search widthStyle=" lg:w-[643px] ml-4 rounded-full hidden md:block lg:mr-1 lg-bg-purple-400 " />
          <AccountLinks />
        </div>
      </div>
    </div>
  );
};
