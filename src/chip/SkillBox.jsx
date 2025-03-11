import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillBox = ({
  logo,
  black,
  white,
  skill,
  rating,
  description,
  variants,
  custom,
  animate,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  // Each skill card will have a slightly different floating animation
  // based on its index to create a more organic feel
  const getRandomDelay = () => 0.5 + Math.random() * 1.5; // Random delay between 0.5 and 2 seconds
  const floatDelay = getRandomDelay();

  return (
    <motion.div
      className="perspective-500 w-[11rem] h-[11rem] rounded-lg sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      // Preserve the original variants for fade in/out
      variants={variants}
      custom={custom}
      // Add floating animation as an additional effect
      whileInView={{
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      // Original transition for hover effect
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Enhanced shadow for floating effect */}
        <div
          className="absolute w-full h-full rounded-lg opacity-30 bg-gray-500 blur-md"
          style={{
            transform: "translateZ(-10px) translateY(15px) scale(0.9)",
            filter: "blur(8px)",
            zIndex: -1,
          }}
        ></div>

        {/* Front of the card */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-lg bg-${black} text-${white} shadow-2xl flex flex-col items-center justify-center gap-4 p-1`}
          style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
        >
          <div
            className={`bg-${white} text-${black} w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl`}
          >
            {logo}
          </div>
          <p className="font-semibold exsm:text-sm">{skill}</p>
        </div>

        {/* Back of the card */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg bg-${white} text-${black} shadow-2xl flex flex-col items-center justify-center p-4 sm:p-2 text-center`}
          style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
        >
          <p className="text-sm sm:text-xs exsm:text-[10px] overflow-y-auto max-h-full">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBox;
