import Link from "next/link";
import { React, useState } from "react";
import NavItems from "./NavItems";
import Logo from "../svgs/logo.svg";
import { MdMenu } from "react-icons/md";
import { Aside } from "../Aside";
import { CatList } from "../Category/CatList";
imp
import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";
import Search from "./Search";

// All design are been adjusted to mobile first
export const TopNav = ({ toggle }) => {
  const IcconStyle = "text-[32px]";
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className=" shadow-sm ">
      {/* tablet and extended*/}
      <div className=" relative container mx-auto  ">
        {/* mobile*/}
        {/* Adding pr-2 to make space for te search component*/}
        <div className="mobile relative pl-1 px-2 pb-1">
          <div className=" relative flex justify-between items-center bg-white w-full ">
            <div className=" relative flex items-center">
              {/* menu avialable only for mobile xs & sm screen size*/}
              <MdMenu
                className="text-3xl text-gray-600 mr-1 md:hidden"
                onClick={() => setOpenSideBar(!openSideBar)}
              />
              <Link href="#">
                <a className="cursor-pointer">
                  <Logo className="h-10 w-28 md:w-36 " />
                </a>
              </Link>
            </div>

            {/* profile available only for mobile xs & sm screen size*/}
            <Profile />
          </div>
          {/* Search avialable only for mobile xs & sm screen size*/}
          <Search
            widthStyle="w-full pl-2  "
            mobileStyle="mb-3 outline-none rounded-full border border-1 "
            inputStyle=" text-xs py-2 px-2 w-full"
          />
          {/* side nav for mobile view only */}
          <Aside
            sidebarInfo={{ openSideBar, setOpenSideBar }}
            toggleStyle={`
            ${!openSideBar ? "-translate-x-full" : ""} 
          `}
          />
        </div>
        {/* Search Component */}

        <Search widthStyle="w-screen ml-4 hover:text-green-400 rounded-full hidden " />

        {/* NAv right*/}
        {/* end of click to drop condition*/}
      </div>
    </div>
  );
};
