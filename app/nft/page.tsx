"use client"
import Banner from "@/components/Banner";
import Bottomtab from "@/components/Bottomtab";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import NFTBanner from "@/components/NFTBanner";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import World from "@/components/World";
import React, { useEffect, useState } from "react";

const NFT = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      {!showComponent && (
        <div>
          <div className="preloader">
            <div className="bar">
              <Loader />{" "}
            </div>
          </div>
        </div>
      )}
      {showComponent && <NFTContainer />}
    </>
  );
};

export default NFT;

const NFTContainer = () => {
  return (
    <main className="">
      <Sidebar />
      <Banner />
      <div className=" bg-black lg:py-14 py-8 px-4 lg:flex lg:items-end lg:justify-center overflow-hidden ">
        <div className="lg:px-28 ">
          <Search />
          <NFTBanner />

          <h1 className="text-white text-3xl">NFT</h1>

          <Card />
          <World />
        </div>
      </div>
      <Bottomtab />
    </main>
  );
};
