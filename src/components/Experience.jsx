import React from "react";
import ExperienceCard from "../chip/ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      id="experience"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-5"
      >
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="left flex-1 w-full"
      ></motion.div>
      {/* card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5"
      >
        <motion.div className="card-box grid grid-cols-2 gap-10 w-full md:grid-cols-1 sm:gap-8">
          <ExperienceCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
