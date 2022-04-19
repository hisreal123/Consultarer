import Link from "next/link";
import React from "react";
import Logo from "../svgs/logo.svg";
import NavItems from "./NavItems";

// svg-icons
import Briefcase from "../svgs/briefcase.svg";
import Hub from "../svgs/ash-02.svg";
import Bell from "../svgs/bell.svg";
import Msg from "../svgs/msg.svg";
import Fav from "../svgs/fav.svg";
import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";
import Search from "./Search";

export const TopNav = () => {

  const IcconStyle =  '"text-[60px]"'
  return (
    <div>
      <div className="flex items-center ">
        <Logo className=" text-9xl p-0 m-0" />

        {/* Search Comonent */}
        <Search />

        {/* NAv right*/}
        <div className="nav inline-flex">
          <NavItems
            title="Welcome"
            icon={<Briefcase className=" "/>}
          />

          <NavItems title="Hub" icon={<Hub className="text-6xl  " />} />

          <NavItems
            title="Notification"
            icon={<Bell className="text-6xl  " />}
          />

          <NavItems title="Message" icon={<Msg className="text-6xl  " />} />

          <NavItems title="Favourite" icon={<Fav className="text-6xl  " />} />

          <NavItems title="Profile" icon={<Profile className="text-6xl  " />} />
        </div>
      </div>
    </div>
  );
};
