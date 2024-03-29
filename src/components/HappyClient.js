"use client";
import Image from "next/image";
import image1 from "../../public/assets/client/atmosvr.png";
import image2 from "../../public/assets/client/Benz.png";
import image3 from "../../public/assets/client/bmw.png";
import image4 from "../../public/assets/client/eyequestion.png";
import image5 from "../../public/assets/client/gas-natural-fenosa.png";
import image6 from "../../public/assets/client/Givaudan.png";
import image7 from "../../public/assets/client/ibm.png";
import image8 from "../../public/assets/client/marca.png";
import image9 from "../../public/assets/client/texas.png";
import image10 from "../../public/assets/client/Uni-Birmingham.png";
import React, { useMemo, useRef, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HappyClient = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container mx-auto text-center space-y-11">
      <div>
        <p className="text-[28px] font-bold text-[#3575B1]">
          Some of our <span className="text-black">happy clients</span>
        </p>
        <p>The right solution can make the difference:</p>
      </div>
      <div className="mx-6 flex items-center">
        <Swiper
          className="relative flex items-center justify-center"
          // install Swiper modules
          // onSlideChange={(e) => {
          //   setBeginAndEnd({
          //     isBegin: e.isBeginning,
          //     isEnd: e.isEnd,
          //   });
          // }}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
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
          breakpoints={{
            240: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide className="flex items-center py-10 mt-6">
            <Image
              src={image1}
              loading="lazy"
              height={150}
              width={150}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <Image
              src={image2}
              loading="lazy"
              alt=""
              height={120}
              width={120}
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <Image
              src={image3}
              loading="lazy"
              alt=""
              height={120}
              width={120}
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <Image
              src={image4}
              loading="lazy"
              alt=""
              height={120}
              width={120}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-6 py-10">
            <Image
              src={image5}
              loading="lazy"
              alt=""
              height={150}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-12 py-10">
            <Image
              src={image6}
              loading="lazy"
              alt=""
              height={150}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-10 py-10">
            <Image
              src={image7}
              loading="lazy"
              alt=""
              height={150}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <Image
              src={image8}
              loading="lazy"
              alt=""
              height={120}
              width={120}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-6 py-10 ">
            <Image
              src={image9}
              loading="lazy"
              alt=""
              height={150}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-10 py-10">
            <Image
              src={image10}
              loading="lazy"
              alt=""
              height={150}
              width={150}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HappyClient;
