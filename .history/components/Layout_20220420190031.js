import React from "react";
import { TopNav } from "./TopNav/TopNav";
import { LinkData } from "../utils/LinkData";

const Layout = ({ children, listData }) => {
  return (
    <div>
      <TopNav linkDataList={list} />
      {children}
    </div>
  );
};

export default Layout;

export async function getStaticProps() {
  return {
    props: {
      linkDataList: LinkData,
    },
    revalidate: 4 * 60 * 60,
  };
}
