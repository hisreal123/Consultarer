import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status, linkDataList }) => {
  return (
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
              {linkDataList.map((list) => (
                <div>
                  <span className=" ">
                    <p className="" key={list.id}>
                      {list.icon}
                    </p>
                    {status}
                  </span>
                  <span className=" ">{list.title}</span>
                </div>
              ))}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
