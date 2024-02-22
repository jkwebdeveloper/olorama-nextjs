import Image from "next/image";
import React from "react";
import BannerSlider from "./BannerSlider";
// import banner from "../../public/assets/Background.png";

const Herosection = () => {
  return (
    <div className="w-full relative h-screen ">
        <Image
          src={require("../../public/assets/Background.png")}
          alt="banner"
          className="absolute w-full"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            // objectFit: "cover",
            // height: "100vh",
          }}
        />
          <BannerSlider />
    </div>
  );
};

export default Herosection;
