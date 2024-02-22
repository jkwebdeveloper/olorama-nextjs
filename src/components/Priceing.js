import React from "react";

const PriceingSection = () => {
  return (
    <div className="text-center xl:py-20 py-5 bg-[#EDF3FA]">
      <div className="container mx-auto xl:p-0 p-2 space-y-5">
        <h1 className="text-[#3575B1] text-[28px] font-bold">
          Professional Digital{" "}
          <span className="text-black">Smell Technology</span>
        </h1>
        <p>
          Intelligent digital olfactory devices, available 24x7x365. Adjustable
          scent lingering (from 30 seconds to 5 minutes). Scent capsules valid
          for 1,000 uses*. Supports customer fragances and bespoke scents.
          Multiple control options (including voice control).
        </p>
        <p>
          Worldwide shipping. Order now and receive your products in less than 7
          days**.
        </p>
        <button type="button" className="blue_button uppercase">
          pricing
        </button>
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
