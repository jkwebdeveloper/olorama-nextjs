"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Information = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-20 bg-[#EDF3FA]">
      <div
        data-aos="fade-up"
        className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-10 px-3"
      >
        <div className="bg-white shadow-lg rounded-lg relative">
          <div className="p-10 text-center space-y-5">
            <Image
              src={require("../../public/assets/HIGH QUALITY1.png")}
              width={50}
              height={50}
              className="mx-auto"
            />
            <div className="space-y-2">
              <p className="text-[#3575B1] font-bold">
                PROFESSIONAL SCENT SYNTHESIZERS
              </p>
              <p>
                Smells cannot be simulated electrically, that’s why in Olorama
                we activate ultra-realistic aromas to stimulate the sense of
                smell.
              </p>
              <div className="btn w-fit mx-auto">
                <button className="btn-content uppercase blue_button">
                  Products
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#3575B1] h-2 bottom-11 rounded-b-lg w-full"></div>
        </div>
        <div className="bg-white shadow-lg rounded-lg relative">
          <div className="p-10 text-center space-y-5">
            <Image
              src={require("../../public/assets/HIGH QUALITY1.png")}
              width={50}
              height={50}
              className="mx-auto"
            />
            <div className="space-y-2">
              <p className="text-[#3575B1] font-bold">
                PROFESSIONAL SCENT SYNTHESIZERS
              </p>
              <p>
                Smells cannot be simulated electrically, that’s why in Olorama
                we activate ultra-realistic aromas to stimulate the sense of
                smell.
              </p>
            </div>
          </div>
          <div className="bg-[#3575B1] h-2 bottom-1 mt-[60px] rounded-b-lg w-full"></div>
        </div>
        <div className="bg-white shadow-lg rounded-lg relative">
          <div className="p-10 text-center space-y-5">
            <Image
              src={require("../../public/assets/HIGH QUALITY1.png")}
              width={50}
              height={50}
              className="mx-auto"
            />
            <div className="space-y-2">
              <p className="text-[#3575B1] font-bold">
                PROFESSIONAL SCENT SYNTHESIZERS
              </p>
              <p>
                Smells cannot be simulated electrically, that’s why in Olorama
                we activate ultra-realistic aromas to stimulate the sense of
                smell.
              </p>
              <div className="btn w-fit mx-auto">
                <button className="btn-content uppercase blue_button">
                  Products
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#3575B1] h-2 bottom-11 rounded-b-lg w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Information;
