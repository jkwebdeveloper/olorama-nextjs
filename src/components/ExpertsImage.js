"use client";
import Image from "next/image";
import React from "react";

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
  return (
    <div className="container mx-auto space-y-4 text-center">
      <h1 className="text-[#3575B1] text-[28px] font-bold">
        Your Digital <span className="text-black">Scent Experts</span>
      </h1>
      <p>Select an option, activating scents it’s easier than you think…</p>
      <div className="rounded-lg grid grid-cols-1 lg:grid-cols-3 lg:px-10 px-3">
        {ImagesData.map((item) => (
          <div className="relative flex justify-center items-center text-center">
            <Image
              src={item?.image}
              alt=""
              className="relative"
            />
            <p className="absolute uppercase top-[80%] text-center text-white">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsImage;
