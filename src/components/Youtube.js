"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../public/assets/video_image.webp";
import { MdPlayCircleFilled } from "react-icons/md";

const Youtubesection = ({ videoId }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };
  return (
    <div className="bg-[#EDF3FA] xl:py-20 py-10">
      <div className="lg:px-32 px-6 space-y-5 text-center">
        <p className="lg:text-[32px] text-[#3575B1] text-center text-lg font-bold">
          Ultimate <span className="text-black">Smelling Screens</span>
        </p>
        <p>
          Olorama on Antena 3 News – the most important news program in Spain
          (video with english subtitles)
        </p>
        <div className="mx-auto w-full relative">
          {/* <iframe
            width="560"
            height="315"
            src="https://player.vimeo.com/video/145634975?h=3580a3caf0"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full lg:h-[600px]"
          ></iframe> */}
          {showVideo ? (
            <iframe
              width="560"
              height="315"
              src={`https://player.vimeo.com/video/${145634975}?h=3580a3caf0`}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full lg:h-[600px]"
            ></iframe>
          ) : (
            <>
              <Image
                src={image}
                loading="lazy"
                alt="Video Thumbnail"
                onClick={handleThumbnailClick}
                className="cursor-pointer w-full relative"
              />
              <div
                className="absolute top-[50%] left-[50%] cursor-pointer flex justify-center items-center"
                onClick={handleThumbnailClick}
              >
                <MdPlayCircleFilled className="text-white md:text-[100px] text-[50px] absolute" />
              </div>
            </>
          )}
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YIqLzP0sVdc"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            className="w-full lg:h-[600px]"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Youtubesection;
