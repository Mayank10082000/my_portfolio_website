import React, { useRef } from "react";
import achievementData from "../data/achievementData";
import { motion, useInView } from "framer-motion";
import AchievementCard from "../chip/AchievementCard";

const Achievement = () => {
  // Add ref and useInView hook for scroll animations
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // Trigger when 20% of the element is in view
  });

  // Add animation variants (consistent with other sections)
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
        delay: 0.1 * i,
      },
    }),
  };

  return (
    <div
      id="achievements"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10"
      >
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Achievements & Certifications
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </motion.div>

      {/* Achievement Cards with scroll trigger animation */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-4 sm:grid-cols-1 gap-4 w-[90%] mx-auto"
      >
        {achievementData.map((achievement, index) => (
          <div
            key={achievement.id}
            className="min-h-[400px] sm:min-h-[400px] exsm:min-h-[350px]"
          >
            <AchievementCard
              achievement={achievement}
              index={index}
              variants={itemVariants}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievement;
