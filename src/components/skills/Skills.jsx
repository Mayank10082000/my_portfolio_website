import React from "react";
import SkillBox from "../../chip/SkillBox";

import {
  SiPython,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiAzuredevops,
  SiGooglecloud,
  SiJavascript,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
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
            rating={85}
            description={
              "Proficient in Python programming with strong algorithmic skills"
            }
          />
          <SkillBox
            logo={<SiFlask />}
            black={"white"}
            white={"black"}
            skill={"Flask"}
            rating={70}
            description={
              "Experienced in building web applications using Flask framework"
            }
          />
          <SkillBox
            logo={<SiJavascript />}
            black={"white"}
            white={"black"}
            skill={"JavaScript"}
            rating={80}
            description={
              "Strong skills in modern JavaScript and web development"
            }
          />
          <SkillBox
            logo={<SiReact />}
            black={"white"}
            white={"black"}
            skill={"React"}
            rating={80}
            description={"Proficient in building interactive web applications"}
          />
          <SkillBox
            logo={<SiTailwindcss />}
            black={"white"}
            white={"black"}
            skill={"Tailwind CSS"}
            rating={80}
            description={"Skilled in responsive and efficient styling"}
          />
          <SkillBox
            logo={<SiNumpy />}
            black={"white"}
            white={"black"}
            skill={"NumPy"}
            rating={80}
            description={
              "Proficient in numerical computing and array operations"
            }
          />
          <SkillBox
            logo={<SiPandas />}
            black={"white"}
            white={"black"}
            skill={"Pandas"}
            rating={80}
            description={"Expert in data manipulation and analysis"}
          />
          <SkillBox
            logo={<SiAzuredevops />}
            black={"white"}
            white={"black"}
            skill={"Azure Cloud"}
            rating={65}
            description={"Familiar with Azure cloud services and deployment"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
