import Link from "next/link";
import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AccountLinks } from "./AccountLinks";
import Divider from "./divider";
import { FilterList } from "./FilterList";
import Logo from "../components/svgs/logo.svg";
// Repeated Style for more than one Element
const GenDesc = "text-xs text-red-500  pl-2 py-1";

export const Aside = ({ toggleStyle }) => {
  

  return (
    <div
      className={` bg-white  absolute top-0  left-0  shadow-lg overflow-hidden w-3/4  transition pb-20 z-50 sm:hidden md:hidden
      ${OpenedAside ? " " : "-translate-x-full"} ${toggleStyle}
      `}
    >
      <div className="top  ">
        <div className="top flex  justify-between items-center py-2 px-2">
          <Link href="#">
            <a className="cursor-pointer">
              <Logo className="h-10 w-28 md:w-36 " />
            </a>
          </Link>
          <GrFormClose
            className="text-3xl"
            onClick={() => setOpenedAside(!OpenedAside)}
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
