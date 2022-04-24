import Link from "next/link";
import { React, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Aside } from "../Aside";
import { CatList } from "../Category/CatList";
import Search from "./Search";
import { Profile } from "../Profile";
import { Logo } from "../Logo";

// All design are been adjusted to mobile first
export const TopNav = () => {
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
              <MdMenu
                className="text-3xl text-gray-600 mr-1 md:hidden"
                onClick={() => setOpenSideBar(!openSideBar)}
              />
              <Logo />
            </div>
            <Profile />{" "}
            {/* profile available only for mobile xs & sm screen size*/}
          </div>
          {/* Search avialable only for mobile xs & sm screen size*/}
          <Search
            widthStyle="w-full pl-2  "
            mobileStyle="mb-3 outline-none rounded-full border border-1 "
            inputStyle=" text-xs py-2 px-2 w-full"
          />

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
