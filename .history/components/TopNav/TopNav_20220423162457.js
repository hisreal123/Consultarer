import Link from "next/link";
import { React, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Aside } from "../Aside";
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
       
        <Search widthStyle="w-screen ml-4 hover:text-green-400 rounded-full hidden " />
      </div>
    </div>
  );
};
