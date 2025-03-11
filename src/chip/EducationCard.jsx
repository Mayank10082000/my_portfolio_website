import React from "react";
import { motion } from "framer-motion";

const EducationCard = ({ education, index }) => {
  // Define a staggered delay for floating animation
  const getFloatDelay = (idx) => 0.2 + idx * 0.3; // Faster staggering for more visible effect

  return (
    <motion.div
      key={education.id}
      custom={index}
      variants={{
        hidden: {
          opacity: 0,
          x: -50,
          scale: 0.95,
        },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            type: "tween",
            duration: 0.6,
            delay: i * 0.2,
            ease: "easeOut",
          },
        }),
      }}
      // Enhanced floating animation
      animate={{
        y: [0, -15, 0], // More noticeable movement
        transition: {
          duration: 2.5, // Faster animation
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: getFloatDelay(index),
        },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        x: 5, // Slight move to the right on hover, combined with the existing translateX
        transition: {
          duration: 0.2,
          type: "tween",
        },
      }}
      className={`education-card border-l-4 ${education.borderColor} pl-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-r-lg 
      transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:bg-gray-50 hover:translate-x-1 hover:border-l-8`}
      style={{
        position: "relative",
      }}
    >
      <h4 className="text-xl font-semibold">{education.degree}</h4>
      <p className="text-gray-600 font-medium">{education.institution}</p>
      <p className="text-yellow-500 font-medium">{education.duration}</p>
      <p className="text-gray-500 text-sm mt-2">{education.grade}</p>
    </motion.div>
  );
};

export default EducationCard;
