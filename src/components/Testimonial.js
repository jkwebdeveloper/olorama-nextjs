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

const TestimonialSection = () => {
  const [beginAndEnd, setBeginAndEnd] = useState({
    isEnd: false,
    isBegin: true,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-[#EDF3FA] py-20">
      <div className="lg:px-32 container mx-auto px-6 space-y-5 text-center">
        <p className="lg:text-[32px] text-[#3575B1] text-center text-lg font-bold">
          Real <span className="text-black">Testimonies</span>
        </p>
        <p>Don’t take our word for it – that’s what people say:</p>
        <div className="mx-auto w-full">
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
          >
            <SwiperSlide>
              <div className="text-center py-10 rounded-xl space-y-4 bg-white mx-14">
                <Image
                  src={require("../../public/assets/test.png")}
                  height={50}
                  alt="banner"
                  className="mx-auto"
                />
                <div className="space-y-1 mx-3">
                  <div className="text-[#3575B1] font-bold">
                    Katerina Petrova
                  </div>
                  <p>Co-Organizer at VR Berlin</p>
                  <p>
                    I was very sceptical before I tried Olorama at VR Days
                    Europe. A lot of solutions I did see so far where just
                    strangely looking prototypes. After trying the Olorama
                    solution I was impressed. It simply did the job.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center py-10 rounded-xl space-y-4 bg-white mx-14">
                <Image
                  src={require("../../public/assets/test.png")}
                  height={50}
                  alt="banner"
                  className="mx-auto"
                />
                <div className="space-y-1 mx-3">
                  <div className="text-[#3575B1] font-bold">
                    Katerina Petrova
                  </div>
                  <p>Co-Organizer at VR Berlin</p>
                  <p>
                    I was very sceptical before I tried Olorama at VR Days
                    Europe. A lot of solutions I did see so far where just
                    strangely looking prototypes. After trying the Olorama
                    solution I was impressed. It simply did the job.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          <div
            ref={prevRef}
            className={`swiper-prev-button absolute top-[50%] left-1 active:-translate-x-1 transition-all hover:bg-white p-3 cursor-pointer shadow-lg rounded-full z-10 ${
              beginAndEnd?.isBegin && ""
            } `}
          >
            <IoIosArrowBack className="text-[#3575B1]" />
          </div>
          <div
            ref={nextRef}
            className={` absolute top-[50%] active:translate-x-1 transition-all right-1 hover:bg-white shadow-xl p-3 cursor-pointer rounded-full z-10 ${
              beginAndEnd?.isEnd && ""
            } `}
          >
            <IoIosArrowForward className="text-[#3575B1]" />
          </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
