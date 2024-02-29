"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import image1 from "../../public/assets/BG1.png";
import image2 from "../../public/assets/BG2.png";
const ThinkBest = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto text-center space-y-3">
      <h1 data-aos="fade-up" className="text-[#3575B1] xl:text-2xl text-lg font-bold">
        These are things <span className="text-black">we do best</span>
      </h1>
      <p data-aos="fade-up" className="w-3/4 xl:text-center  text-justify mx-auto">
        It took Edison up to a thousand attempts to invent the light bulb… We
        didn’t need that many, but it took a few dozen attempts to design a
        solution that wouldn’t allow us to miss a single olfactory note:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-10 px-3">
        <div data-aos="fade-right" className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image src={image1} alt="post" className="transition duration-300 hover:scale-110 hover:rounded-lg cursor-pointer"/>
          <div className="mx-6">
            <p className="text-[#3575B1] font-semibold">
              Pure scents, without heating
            </p>
            <p className="xl:text-center text-justify">
              Unlike other non-professional solutions, in Olorama we do not heat
              the scents (which would result in a loss of quality). Therefore we
              offer a 100% real smell for a perfect experience.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image src={image2} alt="post" className="transition duration-300 hover:scale-110 hover:rounded-lg cursor-pointer"/>
          <div className="mx-6">
            <p className="text-[#3575B1] font-semibold">
              No other solution offers greater speed
            </p>
            <p className="xl:text-center text-justify">
              Through a powerful but silent fan, the speed of diffusion of our
              scents is the fastest on the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkBest;
