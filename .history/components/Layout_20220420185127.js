import React from "react";
import { TopNav } from "./TopNav/TopNav";

const Layout = ({ children,  }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};

export default Layout;
