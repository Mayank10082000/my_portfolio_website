import React from "react";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import mine from "../assets/mayank-gupta.png";
import { socialData, heroData } from "../data/socialData"; // Import the data

const Hero = () => {
  return (
    <div
      id="home"
      className={`bg-gradient-to-r from-green-200 to-blue-200 pt-16 sm:pt-20`}
    >
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm {heroData.name}
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={heroData.roles.flatMap((role) => [role, 1000, ""])}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href={heroData.linkedInLink}
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span>Hire Me</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1QWXu-mc4guwEBzu_3WtITplIyVP1Mad0/view?usp=sharing"
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              {socialData.map((item) => (
                <li key={item.id}>
                  <a href={item.url} aria-label={item.ariaLabel}>
                    <item.icon className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          {/* Increased height from 88% to 100% to give more space for the animations */}
          <div className="relative h-[100%] w-fit flex items-center sm:items-end sm:mt-16">
            {/* Removed 'overflow-hidden' to prevent clipping */}
            <div className="relative isolate">
              <img
                data-aos="fade-up"
                className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0 z-10 relative"
                src={mine}
                alt={heroData.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
