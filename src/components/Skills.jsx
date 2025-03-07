import React from "react";
import SkillBox from "../chip/SkillBox";

import {
  SiPython,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiAzuredevops,
  SiTailwindcss,
  SiReact,
  SiCplusplus,
  SiNodedotjs,
} from "react-icons/si";

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
          <SkillBox
            logo={<SiPython />}
            black={"white"}
            white={"black"}
            skill={"Python"}
            description={
              "Proficient in Python programming with strong algorithmic skills."
            }
          />
          <SkillBox
            logo={<SiCplusplus />}
            black={"white"}
            white={"black"}
            skill={"C++"}
            description={
              "Familiar with C++ programming for solving Data Structure Problems."
            }
          />
          <SkillBox
            logo={<SiFlask />}
            black={"white"}
            white={"black"}
            skill={"Flask"}
            description={
              "Have an experience in building web applications using Flask framework."
            }
          />
          <SkillBox
            logo={<SiNodedotjs />}
            black={"white"}
            white={"black"}
            skill={"NodeJS"}
            description={
              "Familiar with NodeJS for building backend for web applications."
            }
          />
          <SkillBox
            logo={<SiReact />}
            black={"white"}
            white={"black"}
            skill={"React"}
            description={
              "Have a basic knowledge in building interactive web applications frontend."
            }
          />
          <SkillBox
            logo={<SiTailwindcss />}
            black={"white"}
            white={"black"}
            skill={"Tailwind CSS"}
            description={"Having a basic idea of tailwind CSS."}
          />
          <SkillBox
            logo={<SiNumpy />}
            black={"white"}
            white={"black"}
            skill={"NumPy"}
            description={
              "Proficient in numerical computing and array operations."
            }
          />
          <SkillBox
            logo={<SiPandas />}
            black={"white"}
            white={"black"}
            skill={"Pandas"}
            description={"Expert in data manipulation and analysis."}
          />
          <SkillBox
            logo={<SiAzuredevops />}
            black={"white"}
            white={"black"}
            skill={"Azure Cloud"}
            description={"Familiar with Azure cloud services and deployment."}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
