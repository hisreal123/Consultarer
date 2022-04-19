import Link from "next/link";
import React from "react";
import "../LinkData";

// delete


const NavItems = () => {
  return (
    <div>
      {(LinkData || []).map((item, i) => (
      ))}
    </div>
  );
};

export default NavItems;
