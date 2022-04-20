import Head from "next/head";
import Image from "next/image";
import CatList from "../components/Category/CatList";
import { CatLinkData } from "../utils/CatLinkdata";
import {LinkData} from "../utils/CatLinkdata";

export default function Home({ data, linkData }) {
  return (
    <div className="">
      <Head>
        <title>Cosultarer.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{/*    <CatList allCatLinkData={data} /> */}</main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: CatLinkData,
      linkData : LinkData,
    },
    revalidate: 4 * 60 * 60,
  };
}


