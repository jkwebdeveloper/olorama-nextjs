"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import high from "../../public/assets/HIGH QUALITY1.png";
import high1 from "../../public/assets/PROFESSIONAL.png";
import high2 from "../../public/assets/PROFESSIONAL SCENT.png";


const data = [
  {
    id: 1,
    image: high1,
    title: "PROFESSIONAL SCENT SYNTHESIZERS",
    des: "Smells cannot be simulated electrically, that’s why in Olorama we activate ultra-realistic aromas to stimulate the sense of smell.",
    button: "Products",
  },
  {
    id: 2,
    image: high,
    title: "THE FIRST EUROPEAN SMELL TECHNOLOGY",
    des: "Since iSmell failed, other non-professional smell solutions have been developed in North America, but Olorama is the only effective technology to stimulate the sense of smell.",
    button: "Products",
  },
  {
    id: 3,
    image: high2,
    title: "PROFESSIONAL SCENT MARKETING",
    des: "Nothing like the power of smell helps you reinforce your brand and build customer loyalty.Olorama is the most advanced  scent marketing solution available.",
    button: "Products",
  },
];

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
        {data.map((item) => (
          <div
            key={item?.id}
            className="bg-white shadow-lg rounded-lg relative"
          >
            <div className="p-5 text-center space-y-5">
              <Image
                src={item?.image}
                loading="lazy"
                width={50}
                height={50}
                className="mx-auto"
              />
              <div className="space-y-4">
                <p className="text-[#3575B1] font-bold">{item?.title}</p>
                <p className="text-justify">{item?.des}</p>
                <div className="btn w-fit mx-auto">
                  <button className="btn-content uppercase blue_button">
                    {item?.button}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="bg-[#3575B1] h-2 bottom-11 rounded-b-lg w-full"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
