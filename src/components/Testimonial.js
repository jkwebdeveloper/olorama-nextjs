"use client";
import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import image1 from "../../public/assets/test.png";

const SliderData = [
  {
    id: 1,
    image: image1,
    name: "Katerina Petrova",
    Position: "Co-Organizer at VR Berlin",
    des: "I was very sceptical before I tried Olorama at VR Days Europe. A lot of solutions I did see so far where just strangely looking prototypes. After trying the Olorama solution I was impressed. It simply did the job.",
  },
  {
    id: 2,
    image: image1,
    name: "Katerina Petrova",
    Position: "Co-Organizer at VR Berlin",
    des: "I was very sceptical before I tried Olorama at VR Days Europe. A lot of solutions I did see so far where just strangely looking prototypes. After trying the Olorama solution I was impressed. It simply did the job.",
  },
];

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-[#EDF3FA] xl:py-20 py-10">
      <div className="lg:px-32 container mx-auto px-6 xl:space-y-5 space-y-2 text-center">
        <p className="xl:text-2xl text-lg text-[#3575B1] text-center font-bold">
          Real <span className="text-black">Testimonies</span>
        </p>
        <p>Don’t take our word for it – that’s what people say:</p>
        <div className="mx-auto w-full">
          <Swiper
            style={{
              "--swiper-pagination-color": "#3575B1",
              "--swiper-pagination-bullet-inactive-color": "#E0E0E0",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              // "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            className="relative"
            // install Swiper modules
            // onSlideChange={(e) => {
            //   setBeginAndEnd({
            //     isBegin: e.isBeginning,
            //     isEnd: e.isEnd,
            //   });
            // }}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
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
            {SliderData.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="text-center py-10 rounded-xl space-y-4 bg-white md:mx-14 mx-5">
                  <Image
                    src={item?.image}
                    height={50}
                    loading="lazy"
                    alt="banner"
                    className="mx-auto"
                  />
                  <div className="space-y-1 mx-3">
                    <div className="text-[#3575B1] font-bold">{item?.name}</div>
                    <p>{item?.Position}</p>
                    <p className="xl:text-center text-justify">{item?.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
