import Image from "next/image";
import React from "react";

const Congresssection = () => {
  return (
    <div className="bg-[#04254A] py-20">
      <div className="grid container mx-auto grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="flex items-center justify-center">
          <Image
            src={require("../../public/assets/lanvome.png")}
            width={200}
            height={200}
            alt="lanvome"
          />
        </div>
        <div className="text-white space-y-5">
          <p>CASE STUDY</p>
          <p className="border w-2/3 text-2xl border-gray-600 p-2">
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
          <button type="button" className="blue_button uppercase">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Congresssection;
