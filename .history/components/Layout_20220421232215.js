import React from "react";
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
