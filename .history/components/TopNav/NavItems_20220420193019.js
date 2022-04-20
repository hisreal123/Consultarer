import Link from "next/link";
import React from "react";

import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

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
