"use client";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import MobileAds from "@/components/Homepage/MobileAds";
import NewsLetter from "@/components/Homepage/NewsLetter";
import Payment from "@/components/Homepage/Payment";
import Aos from "aos";
import { useEffect } from "react";

const MainPage = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <head>
        <title>BEMA</title>
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
