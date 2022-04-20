import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status }) => {
  return (
    <nav>
      <ul className="bg-red-400 w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a
              className="  relative flex justify-between lg:flex-col lg:items-center 
            lg:hover:text-black sm:focus:text-red-400 lg:text-gray-600 lg:text-xs  transition  
              lg:hover:border-b-2  lg:hover:border-black lg:border-b-white py-3 lg:py-0"
            >
              <span className="lg:hover:text-green lg:block lg:lg:p-3  ">
                <p className="hidden">{icon}</p>
                {status}
              </span>
              <span className="font-normal hover:scale-105 transition-all text-left w-screen md:w-auto ">
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
