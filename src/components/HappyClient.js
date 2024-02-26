import Image from "next/image";
import React from "react";

const HappyClient = () => {
  return (
    <div className="w-full text-center space-y-11">
      <div>
        <p className="text-[28px] font-bold text-[#3575B1]">
          Some of our <span className="text-black">happy clients</span>
        </p>
        <p>The right solution can make the difference:</p>
      </div>
      <div className="flex md:flex-row flex-col gap-5 items-center">
        <Image src={require("../../public/assets/happy clients/image 2.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 3.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 4.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 5.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 6.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 7.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 8.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 9.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 10.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 11.png")} height={180} width={180}/>
        <Image src={require("../../public/assets/happy clients/image 12.png")} height={180} width={180}/>
      </div>
    </div>
  );
};

export default HappyClient;
