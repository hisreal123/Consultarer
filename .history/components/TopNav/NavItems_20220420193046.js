import Link from "next/link";
import React from "react";

import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";


export const datalink = [
  {
    id: 1,
    title: " Workplace",
  },

  {
    id: 2,
    title: "Hub",
   
  },

  {
    id: 3,
    title: " Notification",
    // icon: <MdOutlineNotificationsActive />,
  },

  {
    id: 4,
    title: " Message",
    // icon: <BsChat />,
  },

  {
    id: 5,
    title: " Favourite",
    // icon: <BsHeart />,
  },
];


const NavItems = ({ status, data }) => {
  return (
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
              {data.map((list) => (
                <li key={list.id}>{list.Category}</li>
              ))}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
