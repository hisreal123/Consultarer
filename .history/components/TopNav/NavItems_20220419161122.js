import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/#" passHref={true} className="group bg-red-400">
            <a className="lg:flex lg:flex-col lg:items-center hover:text-black  lg:text-gray-600 lg:text-xs  trasition lg:hover:border-b-2  lg:border-black">
              <span className="hover:text-green block lg:p-5  ">{icon}</span>
              <span className="font-normal hover:scale-105 transition-all">
                {title}

                {status ? "" : " "}
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
