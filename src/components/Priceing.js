"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PriceingSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-center xl:py-20 py-5 bg-[#EDF3FA]">
      <div data-aos="fade-up" className="container mx-auto xl:p-0 p-3 md:space-y-5 space-y-3">
        <h1 className="text-[#3575B1] xl:text-2xl text-lg font-bold">
          Professional Digital{" "}
          <span className="text-black">Smell Technology</span>
        </h1>
        <p className="xl:text-center text-justify">
          Intelligent digital olfactory devices, available 24x7x365. Adjustable
          scent lingering (from 30 seconds to 5 minutes). Scent capsules valid
          for 1,000 uses*. Supports customer fragances and bespoke scents.
          Multiple control options (including voice control).
        </p>
        <p>
          Worldwide shipping. Order now and receive your products in less than 7
          days**.
        </p>
        <div className="btn w-fit mx-auto">
          <button className="btn-content uppercase blue_button">pricing</button>
        </div>
        <p>(*) for a minimum intensity</p>
        <p>
          (**) for most of the countries and depending on the process in the
          customs
        </p>
      </div>
    </div>
  );
};

export default PriceingSection;
