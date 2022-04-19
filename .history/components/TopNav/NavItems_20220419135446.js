import Link from "next/link";
import React from "react";
import LinkData from '../../utils/LinkData';

const NavItems = () => {
  return (
    <div>
     {
         LinkData.map((link) => {
         return <h1 key={link.id}> {link.name}</h1>
     })
    }
    </div>
  );
};

export default NavItems;
