import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon, status, data }) => {
  return (
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
              {linkDataList.map((list) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <span className=" " key={list.id}>
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
