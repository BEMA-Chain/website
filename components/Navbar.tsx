'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const { motion, AnimatePresence } = require('framer-motion');

/** Navbar for mobile */
// TODO: merge this to a single component
function Navbar() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  // TODO: not realtime, change to realtime
  const isMobile = window.innerWidth

  if (isMobile) {
    return (
      <section className="left-0 w-full overflow-x-hidden absolute top-0 hidden lg:flex  bg-black  ">
        <div className="  min-w-[100vw]   z-50 bg-black ">
          <div className="h-auto bg-transparent   text-white">
            <nav
              className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0"
              x-data="{isOpen: false, menuOne:false}"
            >
              <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
                <Link href="#">BemaVerse</Link>
                <div className="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
                  <div className="relative flex flex-col">
                    <Link
                      href="/"
                      className="flex flex-row rounded-lg hover:text-[#FF9500] lg:px-6 lg:py-4"
                    >
                      Home
                    </Link>
                  </div>
                  <Link
                    href="/how-it-works"
                    className="font-inter rounded-lg hover:text-[#FF9500] lg:px-6 lg:py-4"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/about"
                    className="font-inter rounded-lg hover:text-[#FF9500] lg:px-6 lg:py-4"
                  >
                    About us
                  </Link>
                  <Link
                    href="/faq"
                    className="font-inter rounded-lg pb-8 hover:text-[#FF9500] lg:px-6 lg:py-4 lg:pb-0"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className="font-inter rounded-lg pb-8 hover:text-[#FF9500] lg:px-6 lg:py-4 lg:pb-0"
                  >
                  Contact us
                  </Link>
                  <Link
                    href="/marketplace"
                    className="font-inter rounded-lg pb-8 hover:text-[#FF9500] lg:px-6 lg:py-4 lg:pb-0"
                  >
                    Marketplace
                  </Link>
                </div>
                <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
                  <Link
                    href="/mobileapp"
                    className="inline-block rounded-full bg-white px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-[#FF9500]"
                  >
                    Download App
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="lg:hidden">
      <header className="flex justify-between  px-6">
        <h1 className="text-white cursor-pointer">BeamerVerse</h1>
        <div
          className="py-8 "
          onClick={isOpen}
        >
          <FiMenu className=" text-white text-3xl  top-3" />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '75vh', opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div
              className="btn_close"
              onClick={closeMenu}
            >
              X
            </div>
            <motion.a
              href="/"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInuOt',
                  delay: 1,
                },
              }}
            >
              Home
            </motion.a>
            <motion.a
              href="/how-it-works"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.8,
                },
              }}
            >
              How It Works
            </motion.a>
            <motion.a
              href="/about"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.6,
                },
              }}
            >
              About us
            </motion.a>
            <motion.a
              href="/faq"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.4,
                },
              }}
            >
              FAQ
            </motion.a>
            <motion.a
              href="/contact"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.2,
                },
              }}
            >
              Contact us
            </motion.a>
            <motion.a
              href="/marketplace"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.2,
                },
              }}
            >
              Marketplace
            </motion.a>
            <div>
              <Link
                href="/mobileapp"
                className="flex items-center justify-center rounded-full bg-yellow-600 px-5 py-2 text-center font-bold text-black transition hover:border-black hover:bg-[#FF9500]"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
