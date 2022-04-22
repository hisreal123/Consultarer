import React from "react";
import { Aside } from "./Aside";
import { TopNav } from "./TopNav/TopNav";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <TopNav daa/>
      <Aside />
      {children}
    </div>
  );
};

export default Layout;
