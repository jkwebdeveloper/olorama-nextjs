"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      className={` p-4 top-0 fixed z-40 w-full  ${
        sticky ? " bg-white text-black  z-10 top-0  shadow-lg" : "text-white"
      }`}
    >
      {/* mobile header start */}
      <div
        className={`lg:hidden bg-white  text-black absolute top-0 -left-1 z-20 min-h-screen max-h-screen min-w-[80%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <AiOutlineClose
          className="ml-auto m-5 cursor-pointer text-2xl"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="items-center text-center">
          <ul className="leading-10 pt-3">
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">Home</li>
            </Link>
            <Link href="/application">
              <li className="cursor-pointer uppercase text-[16px]">
                applications
              </li>
            </Link>
            <Link href="/software">
              <li className="cursor-pointer uppercase text-[16px]">software</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">smells</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">products</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">blog</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">contact</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">language</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer uppercase text-[16px]">
                <FaCartShopping />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="md:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="lg:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {/* mobile header end */}
      <nav className="flex container mx-auto justify-between items-center">
        <Link href="/">
          <h1 className={`font-bold ${sticky ? "hover:text-[#3575b1]" : ""} `}>
            OLORAMA <span className="font-normal">TECHNOLOGY</span>
          </h1>
        </Link>
        <ul className="gap-5 hidden lg:flex">
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              Home
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              applications
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              software
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              smells
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              products
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              blog
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              contact
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              language
            </li>
          </Link>
          <Link href="/">
            <li
              className={`cursor-pointer text-[16px] uppercase ${
                sticky ? "navcolor" : "navlink"
              } `}
            >
              <FaCartShopping />
            </li>
          </Link>
        </ul>
        <RiMenu3Line
          onClick={() => setOpenSidebar(true)}
          className={`lg:hidden text-3xl cursor-pointer ${
            sticky ? "text-black" : "text-white"
          }`}
        />
      </nav>
    </div>
  );
};

export default Header;
