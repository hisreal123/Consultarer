import Link from "next/link";
import React from "react";
import LogoPic from "../img/logo.svg";
export const Logo = () => {
  return (
    <div className="">
      <Link href="#">
        <a className="cursor-pointer">
          <LogoPic className="h-10 w-28 md:w-36 " />
        </a>
      </Link>
    </div>
  );
};
