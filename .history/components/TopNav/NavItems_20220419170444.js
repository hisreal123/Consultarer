import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/#" passHref={true} className="group ">
            <a className="relative lg:flex lg:flex-col lg:items-center hover:text-black lg:text-gray-600 lg:text-xs  transition  lg:hover:border-b-2  lg:hover:border-black lg:border-b-white">
              <span className="hover:text-green block lg:p-3  ">
                {icon}
                <p>{status}
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
