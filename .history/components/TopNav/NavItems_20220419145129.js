import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/#" passHref={true}>
            <div className="div">
              <a className="inline-block"> {title}
              {icon}
              </a>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
