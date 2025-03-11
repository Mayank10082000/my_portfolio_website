import React, { useRef } from "react";
import ExperienceCard from "../chip/ExperienceCard";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  // Add animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2 * i,
      },
    }),
  };

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
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5"
      >
        <div className="card-box grid grid-cols-2 gap-10 w-full md:grid-cols-1 sm:gap-8">
          <ExperienceCard variants={itemVariants} />
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
