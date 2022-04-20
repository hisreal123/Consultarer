import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status, linkDataList }) => {
  return (

    {con}
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
              {(linkDataList).map((list) => (
                <>
                  <span className=" ">
                    <p className="" key={list.id}>
                      {list.icon}
                    </p>
                    {status}
                  </span>
                  <span className=" ">{list.title}</span>
                </>
              ))}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
