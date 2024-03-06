"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import images from "../../public/assets/Left.png";
import images2 from "../../public/assets/2.png";
import images3 from "../../public/assets/3.png";
import images4 from "../../public/assets/4.png";

const SliderData = [
  {
    id: 1,
    image: images2,
    title1: "Olorama",
    title2: "the scents of",
    button1: "learn more",
    button2: "Contact Us",
  },
  {
    id: 2,
    image: images3,
    title1: "Smells, sensory",
    title2: "stimulation",
    button1: "learn more",
    button2: "Contact Us",
  },
  {
    id: 3,
    image: images4,
    title1: "Realistic smells,",
    title2: "real sensations",
    button1: "learn more",
    button2: "Contact Us",
  },
];

const BannerSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
  return (
    <div className="space-y-5">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#4D4D4D",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        className="w-full md:h-[80vh] h-[33vh]"
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
      >
        <SwiperSlide className="w-full h-full xl:pt-12 cursor-pointer pt-5">
          <div className="flex justify-center w-full h-full lg:gap-20 gap-0 items-center">
            <div
              data-aos="fade-right"
              className=" md:w-1/3 w-1/2 h-[100%] md:h-[100%] relative"
            >
              <Image
                src={images}
                loading="lazy"
                // width={400}
                // height={500}
                fill
                alt="banner"
                className="w-full h-full object-contain"
              />
            </div>
            <div data-aos="fade-left" className="space-y-5 md:mx-10 mx-3">
              <div className="text-white md:text-4xl text-base font-bold uppercase">
                Professional <br /> Digital Scent <br /> Technology
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="btn-outline">
                  <button className="btn-content uppercase outline_button">
                    learn more
                  </button>
                </div>
                <div className="btn">
                  <button className="btn-content uppercase blue_button">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {SliderData.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="w-full h-full xl:pt-12 cursor-pointer pt-5"
          >
            <div className="flex justify-center w-full h-full lg:gap-20 gap-0 items-center">
              <div
                data-aos="fade-right"
                className=" md:w-2/5 w-1/2 h-[100%] md:h-[100%] relative"
              >
                <Image
                  src={item?.image}
                  loading="lazy"
                  // width={400}
                  // height={500}
                  fill
                  alt="banner"
                  className="w-full h-full mt-11 xl:object-contain object-fill"
                />
              </div>
              <div className="space-y-5 md:mx-10 mx-3">
                <div
                  data-aos="fade-left"
                  className="text-white md:text-4xl text-base font-bold uppercase"
                >
                  {item?.title1} <br />
                  {item?.title2}
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="btn-outline">
                    <button className="btn-content uppercase outline_button">
                      {item?.button1}
                    </button>
                  </div>
                  <div className="btn">
                    <button className="btn-content uppercase blue_button">
                      {item?.button2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="w-full h-full xl:pt-12 cursor-pointer pt-5">
          <div className="flex justify-center w-full h-full lg:gap-20 gap-0 items-center">
            <div className=" md:w-2/5 w-1/2 h-[100%] md:h-[100%] relative">
              <Image
                src={images3}
                loading="lazy"
                // width={400}
                // height={500}
                fill
                alt="banner"
                className="w-full h-full mt-11 xl:object-contain object-fill"
              />
            </div>
            <div className="space-y-5 md:mx-10 mx-3">
              <div className="text-white md:text-4xl text-base font-bold uppercase">
                Smells, sensory <br /> stimulation
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="btn-outline">
                  <button className="btn-content uppercase outline_button">
                    learn more
                  </button>
                </div>
                <div className="btn">
                  <button className="btn-content uppercase blue_button">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full xl:pt-12 cursor-pointer pt-5">
          <div className="flex justify-center w-full h-full lg:gap-20 gap-0 items-center">
            <div className=" md:w-2/5 w-1/2 h-[100%] md:h-[100%] relative">
              <Image
                src={images4}
                loading="lazy"
                // width={400}
                // height={500}
                fill
                alt="banner"
                className="w-full h-full mt-11 xl:object-contain object-fill"
              />
            </div>
            <div className="space-y-5 md:mx-10 mx-3">
              <div className="text-white md:text-4xl text-base font-bold uppercase">
                Realistic smells, <br /> real sensations
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="btn-outline">
                  <button className="btn-content uppercase outline_button">
                    learn more
                  </button>
                </div>
                <div className="btn">
                  <button className="btn-content uppercase blue_button">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
