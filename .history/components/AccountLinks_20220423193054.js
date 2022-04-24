import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import Divider from "./divider";

const AsideLink = [
  {
    id: 1,
    title: " Workplace",
    icon: <BsBriefcase />,
  },

  {
    id: 2,
    title: "Hub",
    icon: <MdOutlineCoronavirus />,
  },

  {
    id: 3,
    title: " Notification",
    icon: <BsBriefcase />,
  },

  {
    id: 4,
    title: "Message",
    icon: <MdOutlineCoronavirus />,
  },

  {
    id: 5,
    title: " Favorites",
    icon: <BsBriefcase />,
  },
];

export const AccountLinks = () => {
  return (
    <div className=" group md:flex md:items-center md:justify-between md:w-full relative   lg:justify-between lg:items-center">
      {AsideLink.map((item) => (
        <div
          key={item.id}
          className="flex items-center px-2 py-2 mb-1 hover:bg-red-200 last:mb-0 md:text-2xl lg:px-0 lg:pt-2 lg:flex-col lg:pl-5 lg:pr-5  lg:hover:bg-white group lg:mb-0 lg:hover:border-b lg:border-b-black transition duration-150 "
        >
          <span className="mr-2 sm: hover:text-red-40 ">{item.icon}</span>
          <h1 className="text-xs"> {item.title}</h1>
        </div>
      ))}
    </div>
  );
};
