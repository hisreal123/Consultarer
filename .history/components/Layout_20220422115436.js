import React from "react";
import { Aside } from "./Aside";
import { TopNav } from "./TopNav/TopNav";

const Layout = ({ children , toggle}) => {
  return (
    <div className="relative">
      <TopNav toggle={toggle}/>
      {children}
    </div>
  );
};

export default Layout;
