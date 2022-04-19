import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/#" passHref={true}>
            <div className="div">
              <a> {title} </a>
              <span className="bg-red-200 text-5xl">{icon}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
