import React from "react";
import { experienceData } from "../data/experienceData"; // We'll create this file next

const ExperienceCard = () => {
  return (
    <>
      {experienceData.map((exp) => {
        return (
          <div
            data-aos="zoom-in"
            key={exp.id}
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
                className="text-blue-500 underline"
              >
                View Certificate
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ExperienceCard;
