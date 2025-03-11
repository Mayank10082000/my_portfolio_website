import React from "react";
import SkillBox from "../chip/SkillBox";
import { skillsData } from "../data/skillsData"; // Import the skills data
import { motion } from "framer-motion";

const Skills = ({ darkMode }) => {
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

        {/* Skills Grid */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <SkillBox
                logo={<skill.icon />}
                black={"white"}
                white={"black"}
                skill={skill.skill}
                description={skill.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
