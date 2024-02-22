"use client";
import React, { useMemo, useRef, useState } from "react";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const BannerSlider = () => {
  const [beginAndEnd, setBeginAndEnd] = useState({
    isEnd: false,
    isBegin: true,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container relative md:block hidden mx-auto xl:px-0 px-5 space-y-5">
      <div className="relative">
        <Swiper
          className="relative"
          // install Swiper modules
          onSlideChange={(e) => {
            setBeginAndEnd({
              isBegin: e.isBeginning,
              isEnd: e.isEnd,
            });
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          direction={"horizontal"}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            enabled: true,
          }}
          observer={true}
          parallax={true}
          observeParents={true}
          // breakpoints={{
          //   240: {
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
          //   1024: {
          //     slidesPerView: 5,
          //     spaceBetween: 10,
          //   },
          //   1280: {
          //     slidesPerView: 6,
          //     spaceBetween: 10,
          //   },
          // }}
        >
          <SwiperSlide>
            <div className="flex justify-center gap-8 items-center">
              <Image
                src={require("../../public/assets/Left.png")}
                width={400}
                height={500}
                alt="banner"
                className="mt-24"
              />
              <div className="space-y-5 mx-10">
                <div className="text-white text-[40px] font-bold uppercase">
                  Professional <br /> Digital Scent <br /> Technology
                </div>
                <div className="flex items-center gap-4">
                  <button type="button" className="uppercase outline_button">
                    learn more
                  </button>
                  <button type="button" className="uppercase blue_button">
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-8 items-center">
              <Image
                src={require("../../public/assets/2.png")}
                width={500}
                alt="banner"
                height={500}
                className="mt-24"
              />
              <div className="space-y-5 mx-10">
                <div className="text-white text-[40px] font-bold uppercase">
                  Olorama <br />
                  the scents of <br />
                  action
                </div>
                <div className="flex items-center gap-4">
                  <button type="button" className="uppercase outline_button">
                    learn more
                  </button>
                  <button type="button" className="uppercase blue_button">
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-8 items-center">
              <Image
                src={require("../../public/assets/3.png")}
                width={450}
                alt="banner"
                height={450}
                className="mt-32"
              />
              <div className="space-y-5 mx-10">
                <div className="text-white text-[40px] font-bold uppercase">
                  Smells, sensory <br /> stimulation
                </div>
                <div className="flex items-center gap-4">
                  <button type="button" className="uppercase outline_button">
                    learn more
                  </button>
                  <button type="button" className="uppercase blue_button">
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-8 items-center">
              <Image
                src={require("../../public/assets/4.png")}
                alt="forth"
                width={500}
                height={500}
                className="mt-32"
              />
              <div className="space-y-5 mx-10">
                <div className="text-white text-[40px] font-bold uppercase">
                  Realistic smells, <br /> real sensations
                </div>
                <div className="flex items-center gap-4">
                  <button type="button" className="uppercase outline_button">
                    learn more
                  </button>
                  <button type="button" className="uppercase blue_button">
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          ref={prevRef}
          className={`swiper-prev-button absolute top-[50%] active:-translate-x-1 transition-all bg-slate-500 p-3 cursor-pointer shadow-lg rounded-full z-10 ${
            beginAndEnd?.isBegin && ""
          } `}
        >
          <IoIosArrowBack className="text-white" />
        </div>
        <div
          ref={nextRef}
          className={` absolute top-[50%] active:translate-x-1 transition-all right-4 bg-slate-500 shadow-xl p-3 cursor-pointer rounded-full z-10 ${
            beginAndEnd?.isEnd && ""
          } `}
        >
          <IoIosArrowForward className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
