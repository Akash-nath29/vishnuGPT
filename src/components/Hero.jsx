import React from "react";
import "./css/Hero.css";
import heroIcon from "./assets/heroIcon.png";

const Hero = () => {
  return (
    <div className="hero w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <img src={heroIcon} alt="" />
      <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">VishnuGPT</h1>
      <br />
      <a href="#chat"><button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Ask Lord Vishnu</button></a>
    </div>
  );
};

export default Hero;
