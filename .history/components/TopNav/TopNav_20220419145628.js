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
  return (
    <div>
      <div className="container mx-auto">
        <Logo className=" text-6xl " />

        {/* Search Comonent */}
        <Search />

        {/* NAv right*/}
        <div className="nav inline-flex">
          <NavItems
          icon={<Briefcase className="text-6xl bg-red-200" />}
          title="Welcome"
          />

          <NavItems
            title="Hub"
            icon={<Hub className="text-6xl bg-red-200" />}
          />

          <NavItems
            title="Notification"
            icon={<Bell className="text-6xl bg-red-200" />}
          />

          <NavItems
            title="Message"
            icon={<Msg className="text-6xl bg-red-200" />}
          />

          <NavItems
            title="Favourite"
            icon={<Fav className="text-6xl bg-red-200" />}
          />

          <NavItems
            title="Profile"
            icon={<Profile className="text-6xl bg-red-200" />}
          />
        </div>
      </div>
    </div>
  );
};
