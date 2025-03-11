import React, { useRef } from "react";
import SkillBox from "../chip/SkillBox";
import { skillsData } from "../data/skillsData";
import { motion, useInView } from "framer-motion";

const Skills = ({ darkMode }) => {
  // Create a reference for the scroll animation
  const ref = useRef(null);
  // This hook will return true when the element is in view
  const isInView = useInView(ref, {
    once: false, // Set to true if you want animation to happen only once
    amount: 0.3, // Amount of element that needs to be in view to trigger animation (0-1)
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i,
      },
    }),
  };

  return (
    <div id="skills" style={{ scrollMarginTop: "40px" }}>
      <div className="container m-auto mt-16">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-5"
        >
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </motion.div>

        {/* Skills Grid - this is the container we're tracking for scroll */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 p-5"
        >
          {skillsData.map((skill, index) => (
            <SkillBox
              key={skill.id}
              logo={<skill.icon />}
              black={"white"}
              white={"black"}
              skill={skill.skill}
              description={skill.description}
              variants={itemVariants}
              custom={index} // Pass the index to calculate staggered delays
              animate={isInView ? "visible" : "hidden"} // You may not need this if using variants properly
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
