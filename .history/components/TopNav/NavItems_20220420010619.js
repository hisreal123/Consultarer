import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status }) => {
  return (
    <nav>
      <ul>
        <li className=" w-screen bg-red-200">
          <Link href="/#" passHref={true} className="group">
            <a className="  relative lg:flex lg:flex-col lg:items-center lg:hover:text-black focus:text-red-400 lg:text-gray-600 lg:text-xs  transition  lg:hover:border-b-2  lg:hover:border-black lg:border-b-white">
              <span className="lghover:text-green lg:block lg:lg:p-3  ">
                {icon}
                {status}
              </span>
              <span className="font-normal hover:scale-105 transition-all">
                {title}
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
