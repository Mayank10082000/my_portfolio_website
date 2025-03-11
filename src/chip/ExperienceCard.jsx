import React from "react";
import { experienceData } from "../data/experienceData"; // We'll create this file next
import { motion } from "framer-motion";

const ExperienceCard = ({ variants, custom }) => {
  return (
    <>
      {experienceData.map((exp, index) => {
        return (
          <motion.div
            key={exp.id}
            variants={variants}
            custom={index}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              backgroundColor: "rgb(249, 250, 251)",
            }}
            className="flex flex-col justify-center items-center gap-4 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-5 rounded-lg"
          >
            <h3 className="text-[1.4rem] font-semibold sm:text-xl">
              {exp.role}
            </h3>
            <p className="text-gray-500 font-medium text-base">{exp.company}</p>
            <p className="text-yellow-500 font-medium text-base">
              {exp.duration}
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              {exp.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {exp.certificate && (
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-200 underline"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        );
      })}
    </>
  );
};

export default ExperienceCard;
