"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Congresssection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#04254A] xl:py-20 py-10">
      <div className="grid container mx-auto grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div data-aos="fade-right" className="flex items-center justify-center">
          <Image
            src={require("../../public/assets/lanvome.png")}
            width={200}
            loading="lazy"
            height={200}
            alt="lanvome"
            className="transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div data-aos="fade-left" className="text-white space-y-5 xl:mx-0 mx-5">
          <p>CASE STUDY</p>
          <p className="border md:w-2/3 w-full xl:text-2xl text-lg border-gray-600 p-2">
            Lâncome International Congress
          </p>
          <p>
            Lâncome, one of the most important brands of l’Oreal, understand
            that products like Olorama Olfactory Technology constituted an
            exceptional tool to train to their staff on new products…
          </p>
          <p>
            Hence, Lâncome contracted the Olorama services for events on their
            international Education&Retail Congress in Cannes (France), between
            12th and 15th of June (2018).
          </p>
          <div className="btn w-fit">
            <button className="btn-content uppercase blue_button">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congresssection;
