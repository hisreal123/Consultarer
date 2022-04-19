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
  const IcconStyle = "text-[60px]";

  return (
    <div>
      <div className=" container mx-auto flex items-center w-screen bg-red-200 justify-between">
        <Logo className=" text-9xl p-0 m-0" />

        {/* Search Comonent */}
        <Search />

        {/* NAv right*/}
        <div className="nav inline-flex text-center">
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

          <NavItems title="Profile" icon={<Profile className={IcconStyle} />} />
        </div>
      </div>
    </div>
  );
};
