"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import vr from "../../public/assets/vr_man.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Productsection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 items-center justify-center gap-7 xl:gap-0  lg:px-20 px-8 ">
      <div data-aos="fade-right" className="flex justify-center">
        <Image
          src={vr}
          loading="lazy"
          alt="vr-man"
          width={400}
          height={400}
          className="md:w-2/3 w-3/5 transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div data-aos="fade-left" className="xl:space-y-5 space-y-1">
        <p className="md:text-base text-sm">DIGITAL SCENT SYNTHESIZER</p>
        <h1 className="xl:text-2xl text-lg font-bold">
          Enjoy the ultimate{" "}
          <span className="text-[#3575B1]">Digital smell simulator</span>,<br />{" "}
          by Olorama Technology{" "}
        </h1>
        <p>Olorama, inspired by the</p>
        <p>
          Smell-O-Vision system, features a patented solution to stimulate the
          sense of smell with more than 200 different scents.
        </p>
        <div className="space-y-4">
          <Link
            href=""
            // onClick={() => {
            //   window.scrollTo({ top: 0, behavior: "smooth" });
            // }}
          >
            {/* <button type="button" className="btn-content uppercase blue_button">
              product
            </button> */}
            <div className="btn w-fit">
              <button className="btn-content uppercase blue_button">
                product
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productsection;
