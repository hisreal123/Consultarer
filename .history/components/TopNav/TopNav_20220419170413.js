import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import LogoPng from "../svgs/jpegLogo.jpg";
import Logo from "../svgs/logo.svg";

// svg-icons
import Briefcase from "../svgs/briefcase.svg";
import Hub from "../svgs/ash-02.svg";
import Bell from "../svgs/bell.svg";
import Msg from "../svgs/msg.svg";
import Fav from "../svgs/fav.svg";
import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";
import Search from "./Search";
import Image from "next/image";

export const TopNav = () => {
  const IcconStyle = "text-[32px]";

  return (
    <div className=" shadow-lg ">
      <div className=" relative container mx-auto flex items-center w-screen justify-between">
        <div className="logo relative  ">
          <Logo className="text-9xl fit h-10 w-36 " />
        </div>

        {/* Search Comonent */}
        <Search widthStyle="w-[603px] ml-4 hover:text-green-400 " />

        {/* NAv right*/}
        <div className="nav inline-flex text-center flex-1 mx-10 justify-between">
          <NavItems
            title="Welcome"
            icon={<Briefcase className={IcconStyle} />}
          />
          <NavItems title="Hub" icon={<Hub className={IcconStyle} />} />

          <NavItems
            title="Notification"
            icon={<Bell className={IcconStyle} />}
          />

          <NavItems title="Message" icon={<Msg className={IcconStyle} />} />

          <NavItems title="Favourite" icon={<Fav className={IcconStyle} />} />

          <NavItems
            title="Profile"
            status={
              <p className="h-2 w-2 bg-green-600 absolute rounded-full right-2 top-8"></p>
            }
            icon={<Profile className={IcconStyle} />}
          />
        </div>
      </div>
    </div>
  );
};
