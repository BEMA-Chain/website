"use client"
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const MobileApp = () => {
  return (
    <>
    <head>
      <title>Mobile | BEMA</title>
    </head>
      <header className="overflow-hidden bg-black lg:bg-black">
        <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
          <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
            <div className="relative z-10 flex w-64 mx-auto overflow-hidden md:w-80 lg:w-auto">
              <Image
                alt="buck"
                src={'/download2.png'}
                className="object-cover w-full h-[30rem] lg:h-[40rem]"
                height={600}
                width={600}
              />
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 pb-14 lg:pl-16 xl:pl-20">
            <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-gray-200 "></div>
            <figure className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left md:pt-12">
              <div className="flex justify-center text-black lg:justify-start">
                <div className="flex gap-1 text-yellow-500">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
              <blockquote className="mt-2">
                <p className="text-xl font-medium lg:text-black text-white">
                  “Here you can write a nice testimonial for your product!”
                </p>
              </blockquote>
              <figcaption className="mt-2 text-sm text-black">
                <strong className="font-semibold lg:text-black text-white ">
                  - Michael Andreuzza
                </strong>
                , Batman
              </figcaption>
            </figure>
          </div>
          <div className="pt-16 bg-black lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20 pb-9">
            <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-yellow-600 sm:text-4xl">
                    App Coming Soon
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Use this paragraph to share information about your company or
                    products. Make it engaging and interesting, and showcase your
                    brand's personality. Thanks for visiting our website!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a
                    className="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-slate-800 border-2 border-black rounded-full hover:bg-[#FF9500] hover:border-black hover:text-black focus:outline-none lg:w-auto"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span className="flex flex-col items-start ml-4 leading-none">
                      <span className="mb-1 text-xs">COMING SOON ON</span>
                      <span className="font-medium title-font">Google Play</span>
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-slate-800 border-2 border-black rounded-full hover:bg-[#FF9500] hover:border-black hover:text-black focus:outline-none lg:w-auto"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span className="flex flex-col items-start ml-4 leading-none">
                      <span className="mb-1 text-xs">COMING SOON ON</span>
                      <span className="font-medium title-font">App Store</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileApp;
