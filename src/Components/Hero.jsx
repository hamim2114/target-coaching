import React, { useEffect, useState } from "react";
import bgimg from "../assets/bg1.jpg";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  return (
    <section id="home">
      <div className="w-full h-[700px]  absolute bg-gray-900/70">
        <Marquee className=" object-cover h-full w-full absolute -z-10">
          <img src={bgimg} alt="" />
        </Marquee>
      </div>
      <div className="relative sm:px-[4rem] xl:px-[15rem] px-6 w-full md:pt-[12rem] pt-[6rem]">
        <div className="text-white mt-14">
          <h6 className="animate__animated animate__fadeInUp h-[26px] md:text-lg">
            <Typewriter
              typeSpeed={50}
              deleteSpeed={4}
              words={["Welcome To Target Coaching Home !", "Our journey for your batter future !"]}
              loop={0}
              cursor={true}
              cursorBlinking={true}
            />
          </h6>
          {/* <h1 className="animate__animated animate__lightSpeedInLeft duration-500 md:text-7xl text-5xl font-bold md:my-3"><Typewriter typeSpeed={50} deleteSpeed={4} words={['Batter Education for All']} loop={1} cursorBlinking={true} /></h1> */}
          <h1 className="animate__animated animate__slideInLeft animate__slow md:text-7xl text-5xl font-bold md:my-3">
            Batter Education for All
          </h1>
          <p className="animate__animated animate__fadeInDown font-light my-5">
            Help today because tomorrow you may be the one who needs helping!{" "}
            <br />
            Forget what you can get and see what you can give.
          </p>
          <button className="animate__animated animate__fadeInLeft bg-blue-600 py-[10px] px-[25px] hover:bg-transparent duration-500 hover:bg-blue-400 mr-2">
            JOIN WITH US
          </button>
          <button className="animate__animated animate__fadeInLeft animate__delay-1s border border-blue-600 py-[10px] px-[25px] duration-500 md:hover:bg-blue-600  bg-transparent">
            OUR CLASSES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
