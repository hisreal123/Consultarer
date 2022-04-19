import Link from "next/link";
import React from "react";
import Data from "../../utils/LinkData";

const NavItems = () => {
  return (
    <div>
      {Data.map((link) => {
        return <h1 key={link.id}> {link.name}</h1>;
      })}
    </div>
  );
};

export default NavItems;
