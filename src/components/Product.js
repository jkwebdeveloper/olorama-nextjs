import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productsection = () => {
  return (
    <div className="grid grid-cols-1 container mx-auto lg:grid-cols-2 items-center justify-center gap-7 xl:gap-0  lg:px-20 px-8 ">
      <div className="flex justify-center">
        <Image
          src={require("../../public/assets/vr_man.png")}
          alt="vr-man"
          width={400}
          height={400}
        />
      </div>
      <div className="xl:space-y-5 space-y-3">
        <p>DIGITAL SCENT SYNTHESIZER</p>
        <h1 className="text-[28px] font-bold">
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
            <button type="button" className="blue_button uppercase">
              product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productsection;
