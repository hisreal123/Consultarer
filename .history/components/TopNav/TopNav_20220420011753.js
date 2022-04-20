import Link from "next/link";
import {React, useState} from "react";
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

export const TopNav = () => {
  const IcconStyle = "text-[32px]";
  const [Open, setOpen] = useState(true)

  return (
    <div className=" shadow-lg ">
      <div className=" relative container mx-auto md:flex items-center w-screen justify-between">
        <div className="logo relative  flex items-center justify-between mx-2">
          <Logo className="text-9xl fit h-10 w-20 md:w-36 " />
          <MdMenuOpen className="text-4xl" onClick={}/>
        </div>

        {/* Search Comonent */}
        <Search widthStyle="w-[603px] ml-4 hover:text-green-400 hidden" />

        {/* NAv right*/}
        <div className="nav md:inline-flex md:text-center md:flex-1 md:mx-10 md:justify-between">
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

          {/*<NavItems
            title="Profile"
            status={
              <p className="h-2 w-2 bg-green-300 absolute rounded-full right-3 top-9 "></p>
            }
            icon={<Profile className={IcconStyle} />}
          /> */}
        </div>
      </div>
    </div>
  );
};
