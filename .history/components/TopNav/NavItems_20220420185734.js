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
                <p key={index}>{list.title}</p>
              ))}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
