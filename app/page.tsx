"use client";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import MobileAds from "@/components/Homepage/MobileAds";
import NewsLetter from "@/components/Homepage/NewsLetter";
import Payment from "@/components/Homepage/Payment";
import Aos from "aos";
import { useEffect } from "react";

/**
 * Landing page of the repo
 * @page
 */
const MainPage = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <head>
        <title>BEMA - The world's First Music Marketplace that embraces a decentralized system of discovery and empowers music to thrive fairly which brings together Music and Metaverse .</title>
      </head>

      <Hero />
      <Features />
      <MobileAds />
      <NewsLetter />
      <Payment />
    </>
  );
};

export default MainPage;
