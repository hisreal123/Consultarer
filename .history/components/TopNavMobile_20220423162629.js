import { React, useState } from "react";
import { Aside } from "./Aside";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import Search from "./TopNav/Search";
import { MdMenu } from "react-icons/md";

export const TopNavMobile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div>
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
    </div>
  );
};
