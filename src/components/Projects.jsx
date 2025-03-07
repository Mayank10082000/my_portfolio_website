import React from "react";
import { projectsData } from "../data/projectsData"; // Import the projects data

const Projects = () => {
  return (
    <div
      id="projects"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Projects
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full"></div>
      {/* card*/}
      <div className="grid grid-cols-1 gap-10 w-[90%] mx-auto mt-8">
        {/* Project Row */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-10">
          {projectsData.map((project) => (
            <fieldset
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay={project.delay}
              className="p-5 py-8 sm:py-6 sm:p-2 h-full"
            >
              <div className="relative h-full">
                <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-full">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 my-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-[.9rem] text-justify break-words text-gray-500 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="px-2 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
