import Link from "next/link";
import React from "react";
import LinkData from '../../utils/LinkData';

const NavItems = () => {
  return (
    <div>
     {LinkData.map(link)}
    </div>
  );
};

export default NavItems;
