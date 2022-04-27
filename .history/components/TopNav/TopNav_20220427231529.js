import Link from "next/link";
import { React, useState } from "react";
import Search from "./Search";
import { TopNavMobile } from "../Mobile/TopNavMobile";
import { Aside } from "../Mobile/Aside";
import { AccountLinks } from "../AccountLinks";
import { Profile } from "../Profile";

// All design are been adjusted to mobile first
export const TopNav = () => {
  return (
    <div className=" shadow-sm ">
      {/* tablet and extended*/}
      <div className=" relative lg:flex item-center ">
        <TopNavMobile />
        <div className="wrap hidden lg:flex  lg:bg-white lg:w-screen   lg:pt-3">
          <Search
            widthStyle="  ml-4 rounded-full hidden md:block lg:mr-1 lg:flex lg:pr-2  lg:bg-[#ad8080] lg:text-white "
            inputStyle="lg:w-[643px] lg:py-2  lg:bg-[#ad8080] lg:pl-2 lg:rounded-lg lg:outline-none lg:text-white"
          />
          <div className="acct w-full relative">
            <AccountLinks />
            <div className="profile"></div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};
