import React from "react";
import { Aside } from "./Aside";
import { TopNav } from "./TopNav/TopNav";
Aside
const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};

export default Layout;
