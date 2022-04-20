import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status, linkDataList }) => {
  return (
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
              {linkDataList.map((list, index) => (
                import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
              ))}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
