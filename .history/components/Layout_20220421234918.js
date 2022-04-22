import React from "react";
import { Aside } from "./Aside";
import { TopNav } from "./TopNav/TopNav";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <TopNav toggle={toggle}/>
      <Aside toggle={}/>
      {children}
    </div>
  );
};

export default Layout;
