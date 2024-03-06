import React from "react";

const Youtubesection = () => {
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
        <div className="mx-auto w-full">
          {/* <iframe
            width="560"
            height="315"
            src="https://player.vimeo.com/video/145634975?h=3580a3caf0"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full lg:h-[600px]"
          ></iframe> */}
          {/* <iframe
            src="https://player.vimeo.com/video/145634975?h=3580a3caf0"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/145634975">
              Smelling Screens | Olorama Technology (news report with english
              subtitles)
            </a>{" "}
            from <a href="https://vimeo.com/olorama">Olorama</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Youtubesection;
