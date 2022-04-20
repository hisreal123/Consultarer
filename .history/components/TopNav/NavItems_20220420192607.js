import Link from "next/link";
import React from "react";

const NavItems = ({ status, data }) => {
  return (
    <nav>
      <ul className="w-screen">
        <li className=" ">
          <Link href="/#" passHref={true} className="group">
            <a className=" ">
              {data.map((list) => (
                {data.map((list) => (
                  <li key={list.id}>{list.Category}</li>
                
              ))}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
