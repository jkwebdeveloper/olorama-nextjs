"use client";
import React, { useEffect, useRef } from "react";

const Youtubesection = () => {
  const vimeoPlayer = useRef(null);

  useEffect(() => {
    const loadVimeoPlayer = () => {
      const player = new window.Vimeo.Player(vimeoPlayer.current, {
        id: 145634975,
        autoplay: false,
        loop: false,
        controls: true,
      });

      player
        .ready()
        .then(() => {
          console.log("Vimeo player is ready");
        })
        .catch((error) => {
          console.error("Error initializing Vimeo player:", error);
        });
    };

    if (typeof window !== "undefined" && window.Vimeo) {
      loadVimeoPlayer();
    } else {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.onload = loadVimeoPlayer;
      document.body.appendChild(script);
    }

    return () => {
      if (vimeoPlayer.current) {
        vimeoPlayer.current.innerHTML = ""; // Clean up the container
      }
    };
  }, []);

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
        <div
          className="flex justify-center items-center relative"
          style={{ width: "100%", height: "100%" }}
          ref={vimeoPlayer}
        ></div>
      </div>
    </div>
  );
};

export default Youtubesection;
