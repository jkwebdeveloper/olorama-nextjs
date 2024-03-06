import Image from "next/image";
import React from "react";
import BannerSlider from "./BannerSlider";
import banner from "../../public/assets/Background.png";

const Herosection = () => {
  return (
    <div
      className="w-full relative"
      // style={{
      //   backgroundImage: `url(${banner.src})`,
      //   width: "100%",
      //   backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     objectFit: "cover",
      //     height:"100%"
      // }}
    >
      <Image
        src={require("../../public/assets/Background.png")}
        alt="banner"
        className="absolute w-full"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          height: "100%",
        }}
      />
      <BannerSlider />
    </div>
  );
};

export default Herosection;
