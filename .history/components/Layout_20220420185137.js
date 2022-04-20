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

export async function getStaticProps() {
  return {
    props: {
      data: CatLinkData,
      linkDataList: LinkData,
    },
    revalidate: 4 * 60 * 60,
  };
}
