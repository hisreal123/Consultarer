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
    title: " Favourite",
    icon: <BsBriefcase />,
  },
];

export const AccountLinks = () => {
  return (
    <div className="md:flex md:items-center md:justify-between md:w-full relative  l ">
      {AsideLink.map((item) => (
        <div
          key={item.id}
          className="flex items-center px-2 py-2 mb-1 hover:bg-red-200 last:mb-0 md:text-2xl"
        >
          <span className="mr-2 hover:text-red-400">{item.icon}</span>
          <h1 className="text-xs"> {item.title}</h1>
        </div>
      ))}
    </div>
  );
};
