import React, { useRef } from "react";
import { projectsData } from "../data/projectsData";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motionVariants";
import ProjectCard from "../chip/ProjectCard";

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
        className="grid grid-cols-3 gap-6 w-[90%] mx-auto mt-8 md:grid-cols-1 md:gap-10"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
