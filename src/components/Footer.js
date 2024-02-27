import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:gap-0 gap-10  lg:grid-cols-4 lg:px-10 lg:py-8 py-5 px-4">
      <div className="space-y-4 text-center">
        <p className=" text-base uppercase text-[#3575B1] font-normal footer heading">
          OLORAMA Technology LTD
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Press</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">community@olorama.com</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Terms - Privacy</span>
        </p>
      </div>
      <div className="space-y-4 text-black">
        <p className="text-[#3575B1] text-base uppercase font-normal footer heading">
          Applications
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Digital Scent Technology</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">VR Smell Technology</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Smell-O-Vision</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Interactive Smells</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Scents For Agencies</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Sensorial Stimulation</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Cinematic VR with smells</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Interactive smells</span>
        </p>
      </div>
      <div className="space-y-4 text-black">
        <p className="text-[#3575B1] uppercase text-base font-normal footer heading">
          Products
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">VR Pack</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Smell Generator</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Smells for Home Theater</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block hover:text-[#3575B1]">
            Smells For Action
          </span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Creative Smells</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Smells Of Nature</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">Smells Of Food</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">(See All Products)</span>
        </p>
      </div>
      <div className="space-y-4 text-black">
        <p className="text-[#3575B1] uppercase text-base font-normal footer heading">
          Contact
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">
            Avenida Giorgeta 16 46.007 Valencia
          </span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">: +34 960 592 078</span>
        </p>
        <p className="text-sm cursor-pointer font-light ">
          <span className="navlink inline-block">: info@olorama.com</span>
        </p>
        <div className="flex items-center gap-6">
          {/* <div className=" text-white text-2xl  cursor-pointer ">
              <FaPinterest />
            </div> */}
          <div className="  text-2xl  cursor-pointer ">
              <FaTwitter />
            </div>
          <div className="  text-2xl  cursor-pointer ">
              <FaFacebook />
            </div>
          {/* <div className=" text-white text-2xl  cursor-pointer ">
              <FaYoutube />
            </div> */}
          {/* <div className=" text-white text-2xl  cursor-pointer ">
              <FaInstagram />
            </div> */}
          <div className="text-2xl  cursor-pointer ">
            <a
              href=""
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
