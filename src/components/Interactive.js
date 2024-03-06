"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import image from "../../public/assets/mobile.png";

const InteractiveSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 container mx-auto lg:grid-cols-2 items-center justify-center gap-7 xl:gap-0  lg:px-20 px-8">
      <div data-aos="fade-right" className="flex justify-center">
        <Image
          src={image}
          loading="lazy"
          alt="vr-man"
          width={400}
          height={400}
          // className="md:w-2/3 w-1/4"
        />
      </div>
      <div data-aos="fade-left" className="xl:space-y-5  space-y-3">
        <h1 className="text-[28px] font-bold text-[#3575B1]">
          Interactive <span className="text-black">smells</span>
        </h1>
        <div className="">
          <p className="font-semibold">Smart olfactory devices for:</p>
          <p>Interactive Kiosks</p>
          <p>Touchscreens</p>
          <p>Digital Signage</p>
        </div>
        <div>
          <p className="font-semibold">
            NEW!{" "}
            <span className="font-normal">Scent activation through voice.</span>
          </p>
          <p>Round out your facilities with interactive smells </p>
        </div>
        <div className="btn w-fit">
          <button className="btn-content uppercase blue_button">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSection;
