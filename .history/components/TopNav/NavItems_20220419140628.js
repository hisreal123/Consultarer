import Link from "next/link";
import React from "react";
import 'LinkDate'

const NavItems = ({LinkData}) => {

    const list = LinkData 
  return (
    <div>
      {LinkData.map((link) => {
        return <h1 key={link.id}> {link.name}</h1>;
      })}
    </div>
  );
};

export default NavItems;
