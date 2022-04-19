import Link from "next/link";
import React from "react";
import Logo from "../svgs/logo.svg";
import NavItems from "./NavItems";


export const TopNav = () => {
  return (
    <div>
      <h1> logo Working </h1>

      <Logo className=" text-6xl " />

      <NavItems />
    </div>
  );
};
