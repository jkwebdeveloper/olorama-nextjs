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
      {/* <div
        className={`lg:hidden bg-white  text-black absolute top-0 -left-1 z-20 min-h-screen max-h-screen min-w-[80%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <AiOutlineClose
          className="ml-auto m-5 cursor-pointer text-2xl"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="items-center text-center ">
          <ul className="leading-10 pt-3 ">
            <Link to="/">
              <li
                className={`cursor-pointer text-[16px] ${
                  sticky ? "navcolor" : "navlink"
                } `}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/who-we-are">
              <li
                className={`cursor-pointer text-[16px] ${
                  sticky ? "navcolor" : "navlink"
                } `}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Who We Are
              </li>
            </Link>
            <Link to="/how-we-work">
              <li
                className={`cursor-pointer text-[16px] ${
                  sticky ? "navcolor" : "navlink"
                } `}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                How We Work
              </li>
            </Link>
            <Link to="/current-vacancies">
              <li
                className={`cursor-pointer text-[16px] ${
                  sticky ? "navcolor" : "navlink"
                }`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Current Vacancies
              </li>
            </Link>
            <Link to="/services">
              <li
                className={`cursor-pointer  text-[16px] ${
                  sticky ? "navcolor" : "navlink"
                }`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Services
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={`cursor-pointer text-[16px] ${
                  sticky ? "navcolor" : "navlink"
                } `}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact
              </li>
            </Link>

            {user !== null ? (
              <Link to="/my-account">
                <li
                  className={`cursor-pointer text-[16px] ${
                    sticky ? "navcolor" : "navlink"
                  } `}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {user?.name}
                </li>
              </Link>
            ) : (
              <div className="gap-2 py-4 space-y-5">
                <div>
                  <Link to="/sign-up">
                    <button
                      type="button"
                      className="focus:outline-none text-[14px] mx-auto block bg-primary_color text-white  rounded-lg text-sm px-4 py-1.5 hover:bg-white border border-primary_color hover:text-primary_color "
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/sign-in">
                    <button
                      type="button"
                      className="focus:outline-none text-[14px] block mx-auto bg-primary_color text-white  rounded-lg text-sm px-4 py-1.5 hover:bg-white border border-primary_color hover:text-primary_color"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div> */}
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
          <h1 className="font-bold">OLOTAMA <span className="font-normal">TECHNOLOGY</span></h1>
        </Link>
        <ul className="gap-5 hidden lg:flex">
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              Home
            </li>
          </Link>
          <Link href="/application">
            <li className="cursor-pointer uppercase text-[16px]">
              applications
            </li>
          </Link>
          <Link href="/software">
            <li className="cursor-pointer uppercase text-[16px]">
              software
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              smells
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              products
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              blog
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              contact
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              language
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer uppercase text-[16px]">
              <FaCartShopping />
            </li>
          </Link>
        </ul>
        <RiMenu3Line
          onClick={() => setOpenSidebar(true)}
          className={`lg:hidden text-3xl cursor-pointer ${
            sticky ? "text-primary_color" : "text-white"
          }`}
        />
      </nav>
    </div>
  );
};

export default Header;
