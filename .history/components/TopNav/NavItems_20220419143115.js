import Link from "next/link";
import React from "react";
import "../LinkData";

const NavItems = () => {
  return (
    <div>
      {(LinkData || []).map((item, i) => (
      ))}
    </div>
  );
};

export default NavItems;
