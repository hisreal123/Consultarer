import Link from "next/link";
import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AccountLinks } from "../AccountLinks";
import Divider from "../divider";
import { FilterList } from "../Filter/FilterList";
import { Logo } from "../Logo";
// Repeated Style for more than one Element
const GenDesc = "text-xs text-red-500  pl-2 py-1";

export const Aside = ({
  toggleStyle,
  sidebarInfo: { openSideBar, setOpenSideBar },
}) => {
  return (
    <div
      className={` bg-white  absolute top-0  left-0  bottom-0 shadow-lg overflow-hidden w-3/4  transition pb-20 z-50  md:w-50 lg:hidden
      ${openSideBar ? " " : "-translate-x-full"} ${toggleStyle}
      `}
    >
      <div className="top ">
        <div className="top flex  justify-between items-center py-2 px-2">
          <Logo />
          <GrFormClose
            className="text-3xl"
            onClick={() => setOpenSideBar(!openSideBar)}
          />
        </div>
        <Divider />
        <h4 className={GenDesc}> Account</h4>
        <AccountLinks />
        <Divider />
        <FilterList filStyle={GenDesc} />
      </div>
    </div>
  );
};
