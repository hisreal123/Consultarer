import Link from "next/link";
import React from "react";
import Logo from "./svgs/logo.svg";

export const TopNav = () => {
  return (
    <div>
      <h1> logo Working </h1>

      <Logo className=" text-6xl bg-red-300" />

      <nav>
        <ul>
          <li>
            <Link href="">
              <a> Workshop</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a> Workshop</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a> Workshop</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a> Workshop</a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a> Workshop</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
