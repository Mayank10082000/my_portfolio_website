import React, { useRef } from "react";
import { projectsData } from "../data/projectsData";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motionVariants";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  return (
    <div
      id="projects"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="relative mb-5"
      >
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Projects
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        variants={staggerContainer()}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-3 gap-4 w-[90%] mx-auto mt-8 md:grid-cols-1 md:gap-10"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", index * 0.2)}
            className="p-5 py-8 sm:py-6 sm:p-2 h-full"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-full"
            >
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2 my-1">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={fadeIn("up", index * 0.2 + techIndex * 0.1)}
                    className="px-2 py-1 bg-gray-200 rounded-md text-xs"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <p className="text-[.9rem] text-justify break-words text-gray-500 flex-grow">
                {project.description}
              </p>

              <div className="flex gap-2 mt-2">
                {project.liveDemo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveDemo}
                    className="px-2 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
