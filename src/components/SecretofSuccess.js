"use client";
import Image from "next/image";
import React, { useState } from "react";

const Data = [
  {
    id: 1,
    imageLight: require("../../public/assets/SCALABILITY2.png"),
    imageDark: require("../../public/assets/SCALABILITY1.png"),
    title: "SCALABILITY",
    para: "For larger spaces, simply use more devices. One olfactory device covers 15 square meters.",
  },
  {
    id: 2,
    imageLight: require("../../public/assets/HIGH QUALITY2.png"),
    imageDark: require("../../public/assets/HIGH QUALITY1.png"),
    title: "HIGH QUALITY SCENTS",
    para: "Up to 10 different ultra-realistic scents per device. Don’t produce scent mixing.",
  },
  {
    id: 3,
    imageLight: require("../../public/assets/SOFTWARE2.png"),
    imageDark: require("../../public/assets/SOFTWARE1.png"),
    title: "SOFTWARE",
    para: "We provide multiple control options including DMX.",
  },
  {
    id: 4,
    imageLight: require("../../public/assets/UNIFORM SPREAD2.png"),
    imageDark: require("../../public/assets/UNIFORM SPREAD1.png"),
    title: "UNIFORM SPREAD",
    para: "Scents cover the desired area in a uniform manner.",
  },
];

const SecretofSuccess = () => {
  const [boxActive, setBoxActive] = useState("");
  const [boxData, setBoxData] = useState("");

  const handleMouseEnter = (box) => {
    console.log("handleMouseEnter", box);
    setBoxActive(box);
  };
  const handleMouseLeave = () => {
    console.log("handleMouseLeave");
    setBoxActive("");
  };

  return (
    <div className="grid grid-cols-1 container mx-auto lg:grid-cols-2 items-center justify-center gap-7 xl:gap-0  lg:px-20 px-8 ">
      <div className="flex justify-center">
        <Image
          src={require("../../public/assets/success.png")}
          alt="vr-man"
          width={400}
          height={400}
        />
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-[28px] font-bold text-[#3575B1]">
            The secret of <span className="text-black">success</span>
          </p>
          <p className="font-semibold">
            Since the year 1900 there have been attempts to introduce scents
            into theaters.{" "}
            <span className="text-[#3575B1]">
              {" "}
              Smelling screens, “scratch and sniff”
            </span>{" "}
            cards, but they have failed to enjoy popularity. We have learnt
            about past mistakes and we provide a{" "}
            <span className="text-[#3575B1]">patented olfactory</span> solution
            which provides:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {Data.map((item) => (
            <div
              className="border bottom-1 space-y-3 hover:bg-[#3575B1] cursor-pointer hover:text-white p-4 rounded-lg border-gray-300"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={
                  boxActive === item.title ? item.imageLight : item.imageDark
                }
                alt="vr-man"
                width={40}
                height={40}
              />
              <p>{item?.title}</p>
              <p>{item?.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecretofSuccess;
