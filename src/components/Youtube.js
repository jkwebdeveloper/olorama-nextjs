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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YIqLzP0sVdc"
            // https://youtu.be/YIqLzP0sVdc?si=4PzWaMzglBffZWPu
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            className="w-full lg:h-[600px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtubesection;
