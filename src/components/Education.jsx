import React from "react";
import { educationData } from "../data/educationData"; // Import the education data
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div
      id="education"
      className="container m-auto mt-16 "
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
          Education
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </motion.div>

      {/* Education Section */}
      <div className="education-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="left flex-1 w-full mb-8"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="education-cards flex flex-col gap-6"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.2,
              }}
              className={`education-card border-l-4 ${education.borderColor} pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg 
  transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-gray-50 hover:translate-x-1 hover:border-l-8`}
            >
              <h4 className="text-xl font-semibold">{education.degree}</h4>
              <p className="text-gray-600 font-medium">
                {education.institution}
              </p>
              <p className="text-yellow-500 font-medium">
                {education.duration}
              </p>
              <p className="text-gray-500 text-sm mt-2">{education.grade}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
