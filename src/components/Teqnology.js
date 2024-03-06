"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import image from "../../public/assets/Group 239954.png";

const DigitalWork = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#EDF3FA] xl:pt-20 xl:py-0 py-4">
      <div className="flex md:flex-row flex-col xl:gap-0 gap-5  items-center ">
        <Image
          data-aos="fade-right"
          src={image}
          loading="lazy"
          width={500}
          height={500}
          className="md:w-1/2 w-3/5"
        />
        <div data-aos="fade-left" className="space-y-3 xl:mx-24 mx-5">
          <h1 className="text-black xl:text-2xl text-lg font-bold">
            How does <br />
            <span className="text-[#3575B1]">
              Digital scent technology work?
            </span>
          </h1>
          <p className="xl:text-left text-justify">
            By means of scent synthesizers, integrating up to 10 realistic
            scents, which can be activated through API, DMX, through an App that
            incorporates speech recognition, and through Unity&Unreal. For more
            scents, simply replicate the number of smell synthesizers.
          </p>
          <div className="btn w-fit">
            <button className="btn-content uppercase blue_button">
              product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWork;
