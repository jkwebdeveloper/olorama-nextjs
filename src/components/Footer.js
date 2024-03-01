"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { IoIosMail, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FooterData = [
  {
    id: 1,
    title: "Applications",
    page1: "Digital Scent Technology",
    page2: "VR Smell Technology",
    page3: "Smell-O-Vision",
    page4: "Interactive Smells",
    page5: "Scents For Agencies",
    page6: "Sensorial Stimulation",
    page7: "Cinematic VR with smells",
    page8: "Interactive smells",
  },
  {
    id: 2,
    title: "Products",
    page1: "VR Pack",
    page2: "Smell Generator",
    page3: "Smells for Home Theater",
    page4: "Smells For Action",
    page5: "Creative Smells",
    page6: "Smells Of Natur",
    page7: "Smells Of Foo",
    page8: "(See All Products)",
  },
];

const FooterSection = () => {
  const [footerMenu, setfooterMenu] = useState(false);
  const toggle = (i) => {
    // console.log(i)
    if (footerMenu === i) {
      return setfooterMenu(false);
    }

    setfooterMenu(i);
  };
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-2 lg:gap-0 gap-10  lg:grid-cols-4 lg:px-10 lg:py-8 py-5 px-4">
        <div className="space-y-4 ">
          <p className=" text-base uppercase text-[#3575B1] font-semibold footer heading">
            OLORAMA Technology LTD
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navlink inline-block">Press</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navlink inline-block">community@olorama.com</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navlink inline-block">Terms - Privacy</span>
          </p>
        </div>
        <div className="space-y-4 text-black md:block hidden">
          <p className="text-[#3575B1] text-base uppercase font-semibold footer heading">
            Applications
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">
              Digital Scent Technology
            </span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">VR Smell Technology</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Smell-O-Vision</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Interactive Smells</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Scents For Agencies</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Sensorial Stimulation</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">
              Cinematic VR with smells
            </span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Interactive smells</span>
          </p>
        </div>
        {/* mobile view start */}
        {FooterData.map((item, i) => (
          <div className="space-y-4 text-black md:hidden block" key={i}>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(i)}
            >
              <p className="text-[#3575B1] text-base uppercase font-semibold">
                {item?.title}
              </p>
              {footerMenu === i ? (
                <IoIosArrowUp className="text-[#3575B1] text-lg" />
              ) : (
                <IoIosArrowDown className="text-[#3575B1] text-lg" />
              )}
            </div>
            {footerMenu === i ? (
              <div className="transition duration-500 space-y-4">
                <hr className="w-full" />
                <div className="space-y-3">
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page1}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page2}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page3}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page4}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page5}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page6}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page7}</span>
                  </p>
                  <p className="text-sm cursor-pointer font-light ">
                    <span className="navcolor inline-block">{item?.page8}</span>
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        {/* mobile view End */}
        <div className="space-y-4 text-black md:block hidden">
          <p className="text-[#3575B1] uppercase text-base font-semibold footer heading">
            Products
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">VR Pack</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Smell Generator</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">
              Smells for Home Theater
            </span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block hover:text-[#3575B1]">
              Smells For Action
            </span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Creative Smells</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Smells Of Nature</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">Smells Of Food</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="navcolor inline-block">(See All Products)</span>
          </p>
        </div>
        <div className="space-y-4 text-black">
          <p className="text-[#3575B1] uppercase text-base font-semibold footer heading">
            Contact
          </p>
          <h1 className="text-sm cursor-pointer font-light ">
            <p className="navlink inline-block">
              <span className="flex gap-2 items-start">
                <FaLocationDot lassName="text-2xl" />
                :Spain Avenida Giorgeta 16 46.007 Valencia
              </span>
            </p>
          </h1>
          <h1 className="text-sm cursor-pointer font-light ">
            <p className="navlink inline-block">
              <span className="flex gap-2 items-start">
                <FaPhone lassName="text-2xl" /> : +34 960 592 078
              </span>
            </p>
          </h1>
          <h1 className="text-sm cursor-pointer font-light ">
            <p className="navlink inline-block">
              <span className="flex gap-2 items-start">
                <IoIosMail className="text-2xl"/> : info@olorama.com
              </span>
            </p>
          </h1>
          <div className="flex items-center gap-6">
            {/* <div className=" text-white text-2xl  cursor-pointer ">
              <FaPinterest />
            </div> */}
            <div className="text-2xl hover:text-[#3575B1] cursor-pointer">
              <FaTwitter />
            </div>
            <div className="text-2xl hover:text-[#3575B1] cursor-pointer">
              <FaFacebook />
            </div>
            {/* <div className=" text-white text-2xl  cursor-pointer ">
              <FaYoutube />
            </div> */}
            {/* <div className=" text-white text-2xl  cursor-pointer ">
              <FaInstagram />
            </div> */}
            <div className="text-2xl hover:text-[#3575B1] cursor-pointer ">
              <a href="" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="w-full" />
        <p className="text-center p-3">
          Olorama Technology Ltd. © 2024. All rights reserved
        </p>
      </div>
    </>
  );
};

export default FooterSection;
