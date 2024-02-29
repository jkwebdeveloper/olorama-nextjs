"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImagesData = [
  {
    id: 1,
    image: require("../../public/assets/SCENTED VR.png"),
    title: "scented vr",
  },
  {
    id: 2,
    image: require("../../public/assets/SMELL-O-VISION.png"),
    title: "SMELL-O-VISION",
  },
  {
    id: 3,
    image: require("../../public/assets/EVENTS.png"),
    title: "EVENTS",
  },
  {
    id: 4,
    image: require("../../public/assets/VOICE ACTIVATED SCENTS.png"),
    title: "VOICE ACTIVATED SCENTS",
  },
  {
    id: 5,
    image: require("../../public/assets/ESCAPE ROOMS.png"),
    title: "ESCAPE ROOMS",
  },
  {
    id: 6,
    image: require("../../public/assets/SENSORIAL STIMULATION.png"),
    title: "SENSORIAL STIMULATION",
  },
];
const ExpertsImage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto xl:space-y-4 space-y-2 text-center">
      <h1 data-aos="fade-up" className="text-[#3575B1] xl:text-2xl text-lg font-bold">
        Your Digital <span className="text-black">Scent Experts</span>
      </h1>
      <p data-aos="fade-up" className="xl:text-base text-sm">
        Select an option, activating scents it’s easier than you think…
      </p>
      <div data-aos="fade-up" className="rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-10 px-3">
        {ImagesData.map((item) => (
          <div
            key={item?.id}
            className="relative flex justify-center cursor-pointer items-center text-center"
          >
            <div>
              <Image
                src={item?.image}
                alt=""
                className="relative  transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="absolute uppercase top-[80%] text-center text-white">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsImage;
