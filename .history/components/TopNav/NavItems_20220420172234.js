import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status }) => {
  return (
    <nav>
      <ul className="bg-red-400 w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a
              className=" "
            >
              <span className=" ">
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
