import Link from "next/link";
import { React, useState } from "react";
import NavItems from "./NavItems";
import Logo from "../svgs/logo.svg";
import { MdMenu } from "react-icons/md";
import { Aside } from "../Aside";
import { CatList } from "../Category/CatList";

import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";
import Search from "./Search";
import { AccountLinks } from "../AccountLinks";

// All design are been adjusted to mobile first
export const TopNav = ({ toggle }) => {
  const IcconStyle = "text-[32px]";
  const [OpenSideBar, setOpenSideBar] = useState(true);

  return (
    <div className=" shadow-sm ">
      {/* content && style medium and tablet screen forward*/}
      <div className=" relative container mx-auto md:flex ">
        {/* mobile*/}
        {/* Adding pr-2 to make space for te search component*/}
        <div className="mobile relative pl-1 px-2 pb-1 ">
          <div className=" relative flex justify-between items-center bg-white w-full ">
            <div className=" relative flex items-center">
              {/* menu avialable only for mobile xs & sm screen size*/}
              <MdMenu
                className="text-3xl text-gray-600 mr-1 md:hidden"
                onClick={() => setOpenSideBar(!OpenSideBar)}
              />
              <Link href="#">
                <a className="cursor-pointer">
                  <Logo className="h-10 w-28 md:w-36 " />
                </a>
              </Link>
            </div>

            {/* profile available only for mobile xs & sm screen size*/}
            <div className="absolute right-0 pr-2 md:hidden">
              <Profile className="text-3xl " />
              <span className="bg-green-600 h-2 w-2 absolute z-10 bottom-1 right-2  rounded-full "></span>
            </div>
          </div>
          {/* Search avialable only for mobile xs & sm screen size*/}
          <Search
            widthStyle="w-full pl-2 md:hidden "
            mobileStyle="mb-3 outline-none rounded-full border border-1 "
            inputStyle=" text-xs py-2 px-2 w-full "
          />
          {/* side nav for mobile view only */}
          <Aside
            toggleStyle={`
            ${!OpenSideBar ? "-translate-x-0" : ""} 
          `}
          />
        </div>
        {/* Search Component */}

        <div className="div hidden  md:flex bg-red-200 overflow-hidden w-fu">
        <Search widthStyle="w-screen ml-4 hover:text-green-400 rounded-full " />

          <AccountLinks />
        </div>
        {/* NAv right*/}
        {/* end of click to drop condition*/}
      </div>
    </div>
  );
};
