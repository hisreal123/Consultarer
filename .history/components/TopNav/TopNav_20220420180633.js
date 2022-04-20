import Link from "next/link";
import { React, useState } from "react";
import NavItems from "./NavItems";
import LogoPng from "../svgs/jpegLogo.jpg";
import Logo from "../svgs/logo.svg";

// svg-icons
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaVirus } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";
import Search from "./Search";
import { MdMenuOpen } from "react-icons/md";

// All design are been adjusted to mobile first
export const TopNav = () => {
  const IcconStyle = "text-[32px]";
  const [Open, setOpen] = useState(true);

  return (
    <div className=" shadow-lg ">
      <div className=" relative container mx-auto ">
        {/* mobile*/}
        <div className="mobile relative pl-1 pr-1">
          <div className=" relative flex justify-between items-center bg-white w-screen ">
            <div className=" relative flex items-center">
              {/* menu avialable only for mobile xs & sm screen size*/}
              <MdMenuOpen
                className="text-3xl text-gray-600 mr-1 md:hidden"
                onClick={() => setOpen(!Open)}
              />
              <Logo className="text-9xl h-10 w-20 md:w-36  " />
            </div>

            {/* profile avialable only for mobile xs & sm screen size*/}
            <div className="absolute right-0 pr-2">
              <Profile className="text-3xl " />
              <span className="bg-green-600 h-2 w-2 absolute z-10 bottom-1 right-2  rounded-full "></span>
            </div>
          </div>
          {/* Search avialable only for mobile xs & sm screen size*/}
          <Search
            widthStyle="w-full hover:text-green-400 "
            inputStyle=" text-xs py-1 px-2"
          />
        </div>
        {/* Search Comonent */}
        <Search widthStyle="w-screen ml-4 hover:text-green-400 rounded-full hidden " />
        {/* NAv right*/}
        {!Open ? (
          " "
        ) : (
          <div className="nav md:inline-flex text-center bg-red-200 w-screen md:text-center md:flex-1 md:mx-10 md:justify-between transition">
            <NavItems
              title="Welcome"
              icon={<BsFillBriefcaseFill className={IcconStyle} />}
            />

            <NavItems title="Hub" icon={<FaVirus className={IcconStyle} />} />

            <NavItems
              title="Notification"
              icon={<MdNotificationsActive className={IcconStyle} />}
            />

            <NavItems
              title="Message"
              icon={<BsChatFill className={IcconStyle} />}
            />

            <NavItems
              title="Favourite"
              icon={<AiFillHeart className={IcconStyle} />}
            />

            <NavItems
              title="Profile"
              status={
                <p className="h-2 w-2 bg-green-300 absolute rounded-full right-3 top-9 hidden"></p>
              }
            />
          </div>
        )}{" "}
        {/* end of click to drop condition*/}
      </div>
    </div>
  );
};
