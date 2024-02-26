import Image from "next/image";
import React from "react";

const InteractiveSection = () => {
  return (
    <div className="grid grid-cols-1 container mx-auto lg:grid-cols-2 items-center justify-center gap-7 xl:gap-0  lg:px-20 px-8">
      <div className="flex justify-center">
        <Image
          src={require("../../public/assets/mobile.png")}
          alt="vr-man"
          width={400}
          height={400}
        />
      </div>
      <div className="xl:space-y-5 space-y-3">
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
        <button type="button" className="blue_button uppercase">
          learn more
        </button>
      </div>
    </div>
  );
};

export default InteractiveSection;
