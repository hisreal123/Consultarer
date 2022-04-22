import React from "react";
import { Aside } from "./Aside";
import { TopNav } from "./TopNav/TopNav";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <TopNav toggle={}/>
      <Aside />
      {children}
    </div>
  );
};

export default Layout;
