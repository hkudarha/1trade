import React from "react";
import fram from "../../assets/website/fram.png";
import "../../styles/website/UserHome.css";
import countrybgimg2 from "../../assets/countrybgimg2.png";
import Navbar from "./Navbar";
import "../../styles/buttons.css";
import video1 from "../../assets/0_Circuit Board_Technology_1920x1080.mp4";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100vh] text-white overflow-hidden"
      style={{
        backgroundImage: `url(${fram})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src={countrybgimg2}
        className="absolute bottom-0 right-0 z-10 w-[70rem]"
        alt=""
      />
      {/* Overlay */}
      <div className="absolute  w-full h-full py-16 px-6  bg-black opacity-50 z-10" />

      <Navbar />

      {/* Optional Content */}
      <div className="relative w-full py-5 sm:mt-0 z-20 px-6 md:px-[10rem] flex items-center justify-center sm:gap-20 gap-5 h-full max-sm:flex-col">
        {/* left  */}
        <div className="w-full sm:w-1/2 flex-col justify-center ">
          <h1 className="text-white text-center md:!text-left font-switzer sm:font-bold font-semibold text-[5.625rem] font-normal sm:leading-normal  leading-[5.625rem]">
            Unlock New
            Possibilities
            With Blockchain
          </h1>

          <p className="text-[1.8rem] leading-10 mt-5 text-center md:!text-left ">
            Experience the Future of the Internet with Secure, Transparent
            Solution
          </p>

          <div className="mt-5 flex items-center justify-center flex-col sm:flex-row sm:justify-start gap-5 w-full ">
            <button className="custom-gradient-button w-full sm:w-fit py-4">
              Get Started For Free
            </button>

            <button className="black_btn px-7 text-[1.5rem] w-full sm:w-fit py-4 text-white font-semibold">
              Get Started For Free
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-full sm:py-[8rem] mb-[10rem] sm:w-1/2 md:w-[50%] md:h-[70%] flex justify-center items-center h-full">
          <video
            autoPlay
            muted
            loop
            src={video1}
            className="h-full w-full rounded-3xl  shadow-lg !relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
