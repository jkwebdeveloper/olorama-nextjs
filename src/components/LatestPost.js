import Image from "next/image";
import React from "react";

const LatestPostSection = () => {
  return (
    <div className="container mx-auto px-6 space-y-5 text-center">
      <p className="lg:text-[32px] text-[#3575B1]  text-center text-lg font-bold">
        Latest <span className="text-black">Posts</span>
      </p>
      <div className="rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-10 px-3">
        <div className="bg-white shadow-md">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={require("../../public/assets/post1.png")}
              alt="post"
              className="transition duration-300 hover:scale-110 hover:rounded-lg cursor-pointer"
            />
          </div>
          <div className="p-5 space-y-2 text-left">
            <p className="font-semibold">Digital scent Q&A</p>
            <p>
              In this post we are going to answer questions that we are
              constantly asked and that we think may be of interest to all those
              who love digital immersion and...
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={require("../../public/assets/post2.png")}
              alt="post"
              className="transition duration-300 hover:scale-110 hover:rounded-lg cursor-pointer"
            />
          </div>
          <div className="p-5 space-y-2 text-left">
            <p className="font-semibold">Smellovision 2024</p>
            <p>
              Smell-O-Vision was our forerunner in our illusion of incorporating
              smell into films, and to definitely make it possible for us to
              smell during the screening of a film. Index What...
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={require("../../public/assets/post3.png")}
              alt="post"
              className="transition duration-300 hover:scale-110 hover:rounded-lg cursor-pointer"
            />
          </div>
          <div className="p-5 space-y-2 text-left">
            <p className="font-semibold">VR Smell 2024</p>
            <p>
              Something excites us and is our motivation to wake up every
              morning with more energy… How can we offer more sensory
              experiences? VR Smell has certainly done a great job...
            </p>
          </div>
        </div>
      </div>
      <div className="btn w-fit mx-auto">
        <button className="btn-content uppercase blue_button">
          learn more
        </button>
      </div>
    </div>
  );
};

export default LatestPostSection;
