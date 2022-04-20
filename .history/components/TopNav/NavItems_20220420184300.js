import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status , linkDataList}) => {
  return (
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
            {(linkDataList).map((list) => (
                <span className=" ">
                <p className="">{icon}</p>
                {status}
              </span>
              <span className=" ">{title}</span>

              ))}

            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
