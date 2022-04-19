import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/#" passHref={true}>
            <a className="lg:flex lg:flex-col lg:items-center hover:text-black  lg:text-gray-600 lg:text-xs ">
              <span className="hover:text-green">{icon}</span>
              <span className="font-bold">{title}</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
