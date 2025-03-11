import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationData } from "../data/educationData";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  // Education card fade-in variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Slide from left
      scale: 0.95, // Slight scale down
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: index * 0.2, // Staggered entry
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.2,
        type: "tween",
      },
    },
  };

  return (
    <div
      id="education"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* Heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Education
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Education Cards */}
      <motion.div ref={ref} className="education-cards flex flex-col gap-6">
        {educationData.map((education, index) => (
          <motion.div
            key={education.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            transition={{
              duration: 0.2,
              type: "tween",
            }}
            className={`education-card border-l-4 ${education.borderColor} pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg 
            transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-gray-50 hover:translate-x-1 hover:border-l-8`}
          >
            <h4 className="text-xl font-semibold">{education.degree}</h4>
            <p className="text-gray-600 font-medium">{education.institution}</p>
            <p className="text-yellow-500 font-medium">{education.duration}</p>
            <p className="text-gray-500 text-sm mt-2">{education.grade}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
