import Head from "next/head";
import { Inter } from "@next/font/google";

import { HomePageSlider } from "@components/HomePageSlider/HomePageSlider";
import { HomePageIntro } from "@components/HomePageIntro/HomePageIntro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Bitterfelder Hof</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageSlider />
      <HomePageIntro />
    </>
  );
}
