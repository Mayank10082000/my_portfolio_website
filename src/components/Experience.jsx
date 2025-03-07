import React from "react";
import ExperienceCard from "../chip/ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full"></div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-2 gap-10 w-full md:grid-cols-1 sm:gap-8">
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default Experience;
