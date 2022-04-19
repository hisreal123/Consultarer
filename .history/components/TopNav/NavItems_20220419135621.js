import Link from "next/link";
import React from "react";
import Data from "../../utils/LinkData";

const NavItems = (Data) => {
  return (
    <div>
      {LinkData.map((link) => {
        return <h1 key={link.id}> {link.name}</h1>;
      })}
    </div>
  );
};

export default NavItems;
