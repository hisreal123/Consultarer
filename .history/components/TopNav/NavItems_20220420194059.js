import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status, mobileStyle, liStyle }) => {
  return (
    <nav className={mobileStyle}>
      <ul className="bg-red-400 w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className="">
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
