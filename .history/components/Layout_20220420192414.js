import React from "react";
import { TopNav } from "./TopNav/TopNav";
import { LinkData } from "../utils/LinkData";

const Layout = ({ children, listData }) => {
  return (
    <div>
      <TopNav data={listData} />
      {children}
    </div>
  );
};

export default Layout;

export async function getStaticProps() {
  return {
    props: {
      data: LinkData,
    },
  };
}
