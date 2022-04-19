import Link from "next/link";
import React from "react";
import LinkData from "../../utils/LinkData";

const NavItems = ({LinkData}) => {
  return (
    <div>
      {LinkData.map(() => {
        return <h1 key={link.id}> {link.name}</h1>;
      })}
    </div>
  );
};

export default NavItems;
