import React from "react";
import SkillBox from "../chip/SkillBox";
import { skillsData } from "../data/skillsData"; // Import the skills data

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" style={{ scrollMarginTop: "40px" }}>
      <div className="container m-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 p-5">
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              logo={<skill.icon />}
              black={"white"}
              white={"black"}
              skill={skill.skill}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
