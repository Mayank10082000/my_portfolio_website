import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationData } from "../data/educationData";
import EducationCard from "../chip/EducationCard";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  return (
    <div
      id="education"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* Heading */}
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

      {/* Education Cards */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="education-cards flex flex-col gap-6"
      >
        {educationData.map((education, index) => (
          <EducationCard
            key={education.id}
            education={education}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
