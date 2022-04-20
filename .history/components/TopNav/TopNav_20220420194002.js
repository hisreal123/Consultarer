import Link from "next/link";
import { React, useState } from "react";
import NavItems from "./NavItems";
import Logo from "../svgs/logo.svg";

// react-icons
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";
import Search from "./Search";
import { MdMenu } from "react-icons/md";

// All design are been adjusted to mobile first
export const TopNav = ({ linkDataList }) => {
  const IcconStyle = "text-[32px]";
  const [Open, setOpen] = useState(true);

  return (
    <div className=" shadow-lg ">
      <div className=" relative container mx-auto ">
        {/* mobile*/}
        {/* Adding pr-2 to make space for te search component*/}
        <div className="mobile relative pl-1 px-2">
          <div className=" relative flex justify-between items-center bg-white w-screen ">
            <div className=" relative flex items-center">
              {/* menu avialable only for mobile xs & sm screen size*/}
              <MdMenu
                className="text-3xl text-gray-600 mr-1 md:hidden"
                onClick={() => setOpen(!Open)}
              />
              <Link href="#">
                <a className="cursor-pointer">
                  <Logo className="h-10 w-28 md:w-36 " />
                </a>
              </Link>
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
            mobileStyle="mb-3 outline-none rounded-full border border-1 "
            inputStyle=" text-xs py-1 px-2 w-full"
          />
        </div>
        {/* Search Comonent */}
        <Search widthStyle="w-screen ml-4 hover:text-green-400 rounded-full hidden " />
        {/* NAv right*/}
        {!Open ? (
          " "
        ) : (
          <div className=" transition-all ">
            <NavItems
              title="Welcome"
              icon={<BsBriefcase className={IcconStyle} />}
            />

            <NavItems title="Hub" icon={<Md className={IcconStyle} />} />

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
